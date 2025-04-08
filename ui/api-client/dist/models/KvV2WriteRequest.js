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
exports.instanceOfKvV2WriteRequest = instanceOfKvV2WriteRequest;
exports.KvV2WriteRequestFromJSON = KvV2WriteRequestFromJSON;
exports.KvV2WriteRequestFromJSONTyped = KvV2WriteRequestFromJSONTyped;
exports.KvV2WriteRequestToJSON = KvV2WriteRequestToJSON;
exports.KvV2WriteRequestToJSONTyped = KvV2WriteRequestToJSONTyped;
/**
 * Check if a given object implements the KvV2WriteRequest interface.
 */
function instanceOfKvV2WriteRequest(value) {
    return true;
}
function KvV2WriteRequestFromJSON(json) {
    return KvV2WriteRequestFromJSONTyped(json, false);
}
function KvV2WriteRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': json['data'] == null ? undefined : json['data'],
        'options': json['options'] == null ? undefined : json['options'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}
function KvV2WriteRequestToJSON(json) {
    return KvV2WriteRequestToJSONTyped(json, false);
}
function KvV2WriteRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': value['data'],
        'options': value['options'],
        'version': value['version'],
    };
}
