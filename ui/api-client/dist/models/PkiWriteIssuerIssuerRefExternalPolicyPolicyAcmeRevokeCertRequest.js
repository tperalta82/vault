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
exports.instanceOfPkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequest = instanceOfPkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequest;
exports.PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequestFromJSON = PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequestFromJSON;
exports.PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequestFromJSONTyped = PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequestFromJSONTyped;
exports.PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequestToJSON = PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequestToJSON;
exports.PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequestToJSONTyped = PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequestToJSONTyped;
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequest interface.
 */
function instanceOfPkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequest(value) {
    return true;
}
function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequestFromJSON(json) {
    return PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequestFromJSONTyped(json, false);
}
function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'payload': json['payload'] == null ? undefined : json['payload'],
        '_protected': json['protected'] == null ? undefined : json['protected'],
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}
function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequestToJSON(json) {
    return PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequestToJSONTyped(json, false);
}
function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeRevokeCertRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'payload': value['payload'],
        'protected': value['_protected'],
        'signature': value['signature'],
    };
}
