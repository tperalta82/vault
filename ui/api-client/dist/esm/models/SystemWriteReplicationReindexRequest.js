/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.21.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the SystemWriteReplicationReindexRequest interface.
 */
export function instanceOfSystemWriteReplicationReindexRequest(value) {
    return true;
}
export function SystemWriteReplicationReindexRequestFromJSON(json) {
    return SystemWriteReplicationReindexRequestFromJSONTyped(json, false);
}
export function SystemWriteReplicationReindexRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'diff': json['diff'] == null ? undefined : json['diff'],
        'force': json['force'] == null ? undefined : json['force'],
        'skipFlush': json['skip_flush'] == null ? undefined : json['skip_flush'],
    };
}
export function SystemWriteReplicationReindexRequestToJSON(json) {
    return SystemWriteReplicationReindexRequestToJSONTyped(json, false);
}
export function SystemWriteReplicationReindexRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'diff': value['diff'],
        'force': value['force'],
        'skip_flush': value['skipFlush'],
    };
}
