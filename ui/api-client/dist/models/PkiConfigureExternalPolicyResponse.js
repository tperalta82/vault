"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.20.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfPkiConfigureExternalPolicyResponse = instanceOfPkiConfigureExternalPolicyResponse;
exports.PkiConfigureExternalPolicyResponseFromJSON = PkiConfigureExternalPolicyResponseFromJSON;
exports.PkiConfigureExternalPolicyResponseFromJSONTyped = PkiConfigureExternalPolicyResponseFromJSONTyped;
exports.PkiConfigureExternalPolicyResponseToJSON = PkiConfigureExternalPolicyResponseToJSON;
exports.PkiConfigureExternalPolicyResponseToJSONTyped = PkiConfigureExternalPolicyResponseToJSONTyped;
/**
 * Check if a given object implements the PkiConfigureExternalPolicyResponse interface.
 */
function instanceOfPkiConfigureExternalPolicyResponse(value) {
    return true;
}
function PkiConfigureExternalPolicyResponseFromJSON(json) {
    return PkiConfigureExternalPolicyResponseFromJSONTyped(json, false);
}
function PkiConfigureExternalPolicyResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'entityJmespath': json['entity_jmespath'] == null ? undefined : json['entity_jmespath'],
        'externalServiceLastUpdated': json['external_service_last_updated'] == null ? undefined : json['external_service_last_updated'],
        'externalServiceUrl': json['external_service_url'] == null ? undefined : json['external_service_url'],
        'externalServiceValidated': json['external_service_validated'] == null ? undefined : json['external_service_validated'],
        'groupJmespath': json['group_jmespath'] == null ? undefined : json['group_jmespath'],
        'lastSuccessfulRequest': json['last_successful_request'] == null ? undefined : json['last_successful_request'],
        'timeout': json['timeout'] == null ? undefined : json['timeout'],
        'trustedCa': json['trusted_ca'] == null ? undefined : json['trusted_ca'],
        'trustedLeafCertificateBundle': json['trusted_leaf_certificate_bundle'] == null ? undefined : json['trusted_leaf_certificate_bundle'],
        'vaultClientCertBundleNoKeys': json['vault_client_cert_bundle_no_keys'] == null ? undefined : json['vault_client_cert_bundle_no_keys'],
    };
}
function PkiConfigureExternalPolicyResponseToJSON(json) {
    return PkiConfigureExternalPolicyResponseToJSONTyped(json, false);
}
function PkiConfigureExternalPolicyResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'enabled': value['enabled'],
        'entity_jmespath': value['entityJmespath'],
        'external_service_last_updated': value['externalServiceLastUpdated'],
        'external_service_url': value['externalServiceUrl'],
        'external_service_validated': value['externalServiceValidated'],
        'group_jmespath': value['groupJmespath'],
        'last_successful_request': value['lastSuccessfulRequest'],
        'timeout': value['timeout'],
        'trusted_ca': value['trustedCa'],
        'trusted_leaf_certificate_bundle': value['trustedLeafCertificateBundle'],
        'vault_client_cert_bundle_no_keys': value['vaultClientCertBundleNoKeys'],
    };
}
