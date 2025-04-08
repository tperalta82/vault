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
 * Check if a given object implements the AuditingCalculateHashResponse interface.
 */
export function instanceOfAuditingCalculateHashResponse(value) {
    return true;
}
export function AuditingCalculateHashResponseFromJSON(json) {
    return AuditingCalculateHashResponseFromJSONTyped(json, false);
}
export function AuditingCalculateHashResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'hash': json['hash'] == null ? undefined : json['hash'],
    };
}
export function AuditingCalculateHashResponseToJSON(json) {
    return AuditingCalculateHashResponseToJSONTyped(json, false);
}
export function AuditingCalculateHashResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'hash': value['hash'],
    };
}
