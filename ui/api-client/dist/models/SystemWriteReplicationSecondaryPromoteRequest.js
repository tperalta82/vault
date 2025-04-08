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
exports.instanceOfSystemWriteReplicationSecondaryPromoteRequest = instanceOfSystemWriteReplicationSecondaryPromoteRequest;
exports.SystemWriteReplicationSecondaryPromoteRequestFromJSON = SystemWriteReplicationSecondaryPromoteRequestFromJSON;
exports.SystemWriteReplicationSecondaryPromoteRequestFromJSONTyped = SystemWriteReplicationSecondaryPromoteRequestFromJSONTyped;
exports.SystemWriteReplicationSecondaryPromoteRequestToJSON = SystemWriteReplicationSecondaryPromoteRequestToJSON;
exports.SystemWriteReplicationSecondaryPromoteRequestToJSONTyped = SystemWriteReplicationSecondaryPromoteRequestToJSONTyped;
/**
 * Check if a given object implements the SystemWriteReplicationSecondaryPromoteRequest interface.
 */
function instanceOfSystemWriteReplicationSecondaryPromoteRequest(value) {
    return true;
}
function SystemWriteReplicationSecondaryPromoteRequestFromJSON(json) {
    return SystemWriteReplicationSecondaryPromoteRequestFromJSONTyped(json, false);
}
function SystemWriteReplicationSecondaryPromoteRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'force': json['force'] == null ? undefined : json['force'],
        'primaryClusterAddr': json['primary_cluster_addr'] == null ? undefined : json['primary_cluster_addr'],
    };
}
function SystemWriteReplicationSecondaryPromoteRequestToJSON(json) {
    return SystemWriteReplicationSecondaryPromoteRequestToJSONTyped(json, false);
}
function SystemWriteReplicationSecondaryPromoteRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'force': value['force'],
        'primary_cluster_addr': value['primaryClusterAddr'],
    };
}
