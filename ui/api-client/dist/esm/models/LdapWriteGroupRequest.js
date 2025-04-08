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
 * Check if a given object implements the LdapWriteGroupRequest interface.
 */
export function instanceOfLdapWriteGroupRequest(value) {
    return true;
}
export function LdapWriteGroupRequestFromJSON(json) {
    return LdapWriteGroupRequestFromJSONTyped(json, false);
}
export function LdapWriteGroupRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'policies': json['policies'] == null ? undefined : json['policies'],
    };
}
export function LdapWriteGroupRequestToJSON(json) {
    return LdapWriteGroupRequestToJSONTyped(json, false);
}
export function LdapWriteGroupRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'policies': value['policies'],
    };
}
