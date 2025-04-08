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
exports.instanceOfSystemWriteReplicationReindexRequest = instanceOfSystemWriteReplicationReindexRequest;
exports.SystemWriteReplicationReindexRequestFromJSON = SystemWriteReplicationReindexRequestFromJSON;
exports.SystemWriteReplicationReindexRequestFromJSONTyped = SystemWriteReplicationReindexRequestFromJSONTyped;
exports.SystemWriteReplicationReindexRequestToJSON = SystemWriteReplicationReindexRequestToJSON;
exports.SystemWriteReplicationReindexRequestToJSONTyped = SystemWriteReplicationReindexRequestToJSONTyped;
/**
 * Check if a given object implements the SystemWriteReplicationReindexRequest interface.
 */
function instanceOfSystemWriteReplicationReindexRequest(value) {
    return true;
}
function SystemWriteReplicationReindexRequestFromJSON(json) {
    return SystemWriteReplicationReindexRequestFromJSONTyped(json, false);
}
function SystemWriteReplicationReindexRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'diff': json['diff'] == null ? undefined : json['diff'],
        'force': json['force'] == null ? undefined : json['force'],
        'skipFlush': json['skip_flush'] == null ? undefined : json['skip_flush'],
    };
}
function SystemWriteReplicationReindexRequestToJSON(json) {
    return SystemWriteReplicationReindexRequestToJSONTyped(json, false);
}
function SystemWriteReplicationReindexRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'diff': value['diff'],
        'force': value['force'],
        'skip_flush': value['skipFlush'],
    };
}
