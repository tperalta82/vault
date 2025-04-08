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
exports.PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestFormatEnum = void 0;
exports.instanceOfPkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequest = instanceOfPkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequest;
exports.PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestFromJSON = PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestFromJSON;
exports.PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestFromJSONTyped = PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestFromJSONTyped;
exports.PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestToJSON = PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestToJSON;
exports.PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestToJSONTyped = PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestToJSONTyped;
/**
* @export
* @enum {string}
*/
var PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestFormatEnum;
(function (PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestFormatEnum) {
    PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestFormatEnum["PEM"] = "pem";
    PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestFormatEnum["DER"] = "der";
    PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestFormatEnum["PEM_BUNDLE"] = "pem_bundle";
})(PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestFormatEnum || (exports.PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestFormatEnum = PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestFormatEnum = {}));
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequest interface.
 */
function instanceOfPkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequest(value) {
    if (!('csr' in value) || value['csr'] === undefined)
        return false;
    return true;
}
function PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestFromJSON(json) {
    return PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestFromJSONTyped(json, false);
}
function PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return Object.assign(Object.assign({}, json), { 'csr': json['csr'], 'format': json['format'] == null ? undefined : json['format'] });
}
function PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestToJSON(json) {
    return PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestToJSONTyped(json, false);
}
function PkiWriteIssuerIssuerRefExternalPolicySignIntermediateRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return Object.assign(Object.assign({}, value), { 'csr': value['csr'], 'format': value['format'] });
}
