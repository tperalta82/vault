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
 * Check if a given object implements the OktaWriteUserRequest interface.
 */
export function instanceOfOktaWriteUserRequest(value) {
    return true;
}
export function OktaWriteUserRequestFromJSON(json) {
    return OktaWriteUserRequestFromJSONTyped(json, false);
}
export function OktaWriteUserRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'groups': json['groups'] == null ? undefined : json['groups'],
        'policies': json['policies'] == null ? undefined : json['policies'],
    };
}
export function OktaWriteUserRequestToJSON(json) {
    return OktaWriteUserRequestToJSONTyped(json, false);
}
export function OktaWriteUserRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'groups': value['groups'],
        'policies': value['policies'],
    };
}
