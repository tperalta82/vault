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
exports.instanceOfTransitTrimKeyRequest = instanceOfTransitTrimKeyRequest;
exports.TransitTrimKeyRequestFromJSON = TransitTrimKeyRequestFromJSON;
exports.TransitTrimKeyRequestFromJSONTyped = TransitTrimKeyRequestFromJSONTyped;
exports.TransitTrimKeyRequestToJSON = TransitTrimKeyRequestToJSON;
exports.TransitTrimKeyRequestToJSONTyped = TransitTrimKeyRequestToJSONTyped;
/**
 * Check if a given object implements the TransitTrimKeyRequest interface.
 */
function instanceOfTransitTrimKeyRequest(value) {
    return true;
}
function TransitTrimKeyRequestFromJSON(json) {
    return TransitTrimKeyRequestFromJSONTyped(json, false);
}
function TransitTrimKeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'minAvailableVersion': json['min_available_version'] == null ? undefined : json['min_available_version'],
    };
}
function TransitTrimKeyRequestToJSON(json) {
    return TransitTrimKeyRequestToJSONTyped(json, false);
}
function TransitTrimKeyRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'min_available_version': value['minAvailableVersion'],
    };
}
