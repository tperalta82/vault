/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import Model, { attr } from '@ember-data/model';
import { withFormFields } from 'vault/decorators/model-form-fields';
import lazyCapabilities, { apiPath } from 'vault/macros/lazy-capabilities';
import { service } from '@ember/service';

const issuerUrls = ['issuingCertificates', 'crlDistributionPoints', 'ocspServers'];
const inputFields = [
  'issuerName',
  'leafNotAfterBehavior',
  'usage',
  'manualChain',
  'revocationSignatureAlgorithm',
  ...issuerUrls,
];
const displayFields = [
  {
    default: ['certificate', 'caChain', 'commonName', 'issuerName', 'issuerId', 'keyId'],
    // also displays parsedCertificate values in the template
  },
  { 'Issuer URLs': issuerUrls },
];
@withFormFields(inputFields, displayFields)
export default class PkiIssuerModel extends Model {
  @service secretMountPath;

  get backend() {
    return this.secretMountPath.currentPath;
  }
  get issuerRef() {
    return this.issuerName || this.issuerId;
  }

  // READ ONLY
  @attr isDefault;
  @attr('string', { label: 'Issuer ID', detailLinkTo: 'issuers.issuer.details' }) issuerId;
  @attr('string', { label: 'Default key ID', detailLinkTo: 'keys.key.details' }) keyId;
  @attr({ label: 'CA Chain', isCertificate: true }) caChain;
  @attr({ isCertificate: true }) certificate;
  @attr('string') serialNumber;

  // parsed from certificate contents in serializer (see parse-pki-cert.js)
  @attr parsedCertificate;
  @attr('string') commonName;
  @attr isRoot;

  @attr subjectSerialNumber; // this is not the UUID serial number field randomly generated by Vault for leaf certificates
  @attr({ label: 'Subject Alternative Names (SANs)' }) altNames;
  @attr({ label: 'IP SANs' }) ipSans;
  @attr({ label: 'URI SANs' }) uriSans;
  @attr({ label: 'Other SANs' }) otherSans;

  // UPDATING
  @attr('string') issuerName;

  @attr({
    label: 'Leaf notAfter behavior',
    subText:
      'What happens when a leaf certificate is issued, but its NotAfter field (and therefore its expiry date) exceeds that of this issuer.',
    docLink: '/vault/api-docs/secret/pki#update-issuer',
    editType: 'yield',
    valueOptions: ['always_enforce_err', 'err', 'truncate', 'permit'],
  })
  leafNotAfterBehavior;

  @attr({
    subText: 'Allowed usages for this issuer. It can always be read.',
    editType: 'yield',
    valueOptions: [
      { label: 'Issuing certificates', value: 'issuing-certificates' },
      { label: 'Signing CRLs', value: 'crl-signing' },
      { label: 'Signing OCSPs', value: 'ocsp-signing' },
    ],
  })
  usage;

  @attr('string', {
    subText:
      "An advanced field useful when automatic chain building isn't desired. The first element must be the present issuer's reference.",
  })
  manualChain;

  @attr({
    subText:
      'The signature algorithm to use when building CRLs. The default value (empty string) is for Go to select the signature algorithm automatically, which may not always work.',
    noDefault: true,
    possibleValues: [
      'sha256withrsa',
      'ecdsawithsha384',
      'sha256withrsapss',
      'ed25519',
      'sha384withrsapss',
      'sha512withrsapss',
      'pureed25519',
      'sha384withrsa',
      'sha512withrsa',
      'ecdsawithsha256',
      'ecdsawithsha512',
    ],
  })
  revocationSignatureAlgorithm;

  @attr('string', {
    subText:
      'The URL values for the Issuing Certificate field; these are different URLs for the same resource.',
    editType: 'stringArray',
  })
  issuingCertificates;

  @attr('string', {
    label: 'CRL distribution points',
    subText: 'Specifies the URL values for the CRL Distribution Points field.',
    editType: 'stringArray',
  })
  crlDistributionPoints;

  @attr('string', {
    label: 'OCSP servers',
    subText: 'Specifies the URL values for the OCSP Servers field.',
    editType: 'stringArray',
  })
  ocspServers;

  // IMPORTING
  @attr('string') pemBundle;
  // readonly attrs returned after importing
  @attr importedIssuers;
  @attr importedKeys;
  @attr mapping;

  @lazyCapabilities(apiPath`${'backend'}/issuer/${'issuerId'}`, 'backend', 'issuerId') issuerPath;
  @lazyCapabilities(apiPath`${'backend'}/root/rotate/exported`, 'backend') rotateExported;
  @lazyCapabilities(apiPath`${'backend'}/root/rotate/internal`, 'backend') rotateInternal;
  @lazyCapabilities(apiPath`${'backend'}/root/rotate/existing`, 'backend') rotateExisting;
  @lazyCapabilities(apiPath`${'backend'}/root`, 'backend') deletePath;
  @lazyCapabilities(apiPath`${'backend'}/intermediate/cross-sign`, 'backend') crossSignPath;
  @lazyCapabilities(apiPath`${'backend'}/issuer/${'issuerId'}/sign-intermediate`, 'backend', 'issuerId')
  signIntermediate;
  get canRotateIssuer() {
    return (
      this.rotateExported.get('canUpdate') !== false ||
      this.rotateExisting.get('canUpdate') !== false ||
      this.rotateInternal.get('canUpdate') !== false
    );
  }
  get canCrossSign() {
    return this.crossSignPath.get('canUpdate') !== false;
  }
  get canSignIntermediate() {
    return this.signIntermediate.get('canUpdate') !== false;
  }
  get canConfigure() {
    return this.issuerPath.get('canUpdate') !== false;
  }
  get canDeleteAllIssuers() {
    return this.deletePath.get('isLoading') || this.deletePath.get('canDelete') !== false;
  }
}
