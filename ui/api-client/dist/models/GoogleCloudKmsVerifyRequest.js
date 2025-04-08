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
exports.instanceOfGoogleCloudKmsVerifyRequest = instanceOfGoogleCloudKmsVerifyRequest;
exports.GoogleCloudKmsVerifyRequestFromJSON = GoogleCloudKmsVerifyRequestFromJSON;
exports.GoogleCloudKmsVerifyRequestFromJSONTyped = GoogleCloudKmsVerifyRequestFromJSONTyped;
exports.GoogleCloudKmsVerifyRequestToJSON = GoogleCloudKmsVerifyRequestToJSON;
exports.GoogleCloudKmsVerifyRequestToJSONTyped = GoogleCloudKmsVerifyRequestToJSONTyped;
/**
 * Check if a given object implements the GoogleCloudKmsVerifyRequest interface.
 */
function instanceOfGoogleCloudKmsVerifyRequest(value) {
    return true;
}
function GoogleCloudKmsVerifyRequestFromJSON(json) {
    return GoogleCloudKmsVerifyRequestFromJSONTyped(json, false);
}
function GoogleCloudKmsVerifyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'digest': json['digest'] == null ? undefined : json['digest'],
        'keyVersion': json['key_version'] == null ? undefined : json['key_version'],
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}
function GoogleCloudKmsVerifyRequestToJSON(json) {
    return GoogleCloudKmsVerifyRequestToJSONTyped(json, false);
}
function GoogleCloudKmsVerifyRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'digest': value['digest'],
        'key_version': value['keyVersion'],
        'signature': value['signature'],
    };
}
