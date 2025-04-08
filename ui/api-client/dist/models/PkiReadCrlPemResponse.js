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
exports.instanceOfPkiReadCrlPemResponse = instanceOfPkiReadCrlPemResponse;
exports.PkiReadCrlPemResponseFromJSON = PkiReadCrlPemResponseFromJSON;
exports.PkiReadCrlPemResponseFromJSONTyped = PkiReadCrlPemResponseFromJSONTyped;
exports.PkiReadCrlPemResponseToJSON = PkiReadCrlPemResponseToJSON;
exports.PkiReadCrlPemResponseToJSONTyped = PkiReadCrlPemResponseToJSONTyped;
/**
 * Check if a given object implements the PkiReadCrlPemResponse interface.
 */
function instanceOfPkiReadCrlPemResponse(value) {
    return true;
}
function PkiReadCrlPemResponseFromJSON(json) {
    return PkiReadCrlPemResponseFromJSONTyped(json, false);
}
function PkiReadCrlPemResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'caChain': json['ca_chain'] == null ? undefined : json['ca_chain'],
        'certificate': json['certificate'] == null ? undefined : json['certificate'],
        'issuerId': json['issuer_id'] == null ? undefined : json['issuer_id'],
        'revocationTime': json['revocation_time'] == null ? undefined : json['revocation_time'],
        'revocationTimeRfc3339': json['revocation_time_rfc3339'] == null ? undefined : json['revocation_time_rfc3339'],
    };
}
function PkiReadCrlPemResponseToJSON(json) {
    return PkiReadCrlPemResponseToJSONTyped(json, false);
}
function PkiReadCrlPemResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'ca_chain': value['caChain'],
        'certificate': value['certificate'],
        'issuer_id': value['issuerId'],
        'revocation_time': value['revocationTime'],
        'revocation_time_rfc3339': value['revocationTimeRfc3339'],
    };
}
