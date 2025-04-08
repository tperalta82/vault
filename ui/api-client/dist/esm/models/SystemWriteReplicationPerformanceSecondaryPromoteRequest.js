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
/**
 * Check if a given object implements the SystemWriteReplicationPerformanceSecondaryPromoteRequest interface.
 */
export function instanceOfSystemWriteReplicationPerformanceSecondaryPromoteRequest(value) {
    return true;
}
export function SystemWriteReplicationPerformanceSecondaryPromoteRequestFromJSON(json) {
    return SystemWriteReplicationPerformanceSecondaryPromoteRequestFromJSONTyped(json, false);
}
export function SystemWriteReplicationPerformanceSecondaryPromoteRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'force': json['force'] == null ? undefined : json['force'],
        'primaryClusterAddr': json['primary_cluster_addr'] == null ? undefined : json['primary_cluster_addr'],
    };
}
export function SystemWriteReplicationPerformanceSecondaryPromoteRequestToJSON(json) {
    return SystemWriteReplicationPerformanceSecondaryPromoteRequestToJSONTyped(json, false);
}
export function SystemWriteReplicationPerformanceSecondaryPromoteRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'force': value['force'],
        'primary_cluster_addr': value['primaryClusterAddr'],
    };
}
