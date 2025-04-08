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
exports.instanceOfRekeyVerificationUpdateRequest = instanceOfRekeyVerificationUpdateRequest;
exports.RekeyVerificationUpdateRequestFromJSON = RekeyVerificationUpdateRequestFromJSON;
exports.RekeyVerificationUpdateRequestFromJSONTyped = RekeyVerificationUpdateRequestFromJSONTyped;
exports.RekeyVerificationUpdateRequestToJSON = RekeyVerificationUpdateRequestToJSON;
exports.RekeyVerificationUpdateRequestToJSONTyped = RekeyVerificationUpdateRequestToJSONTyped;
/**
 * Check if a given object implements the RekeyVerificationUpdateRequest interface.
 */
function instanceOfRekeyVerificationUpdateRequest(value) {
    return true;
}
function RekeyVerificationUpdateRequestFromJSON(json) {
    return RekeyVerificationUpdateRequestFromJSONTyped(json, false);
}
function RekeyVerificationUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'key': json['key'] == null ? undefined : json['key'],
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
    };
}
function RekeyVerificationUpdateRequestToJSON(json) {
    return RekeyVerificationUpdateRequestToJSONTyped(json, false);
}
function RekeyVerificationUpdateRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'key': value['key'],
        'nonce': value['nonce'],
    };
}
