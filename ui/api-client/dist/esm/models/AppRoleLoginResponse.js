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
 * Check if a given object implements the AppRoleLoginResponse interface.
 */
export function instanceOfAppRoleLoginResponse(value) {
    return true;
}
export function AppRoleLoginResponseFromJSON(json) {
    return AppRoleLoginResponseFromJSONTyped(json, false);
}
export function AppRoleLoginResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'role': json['role'] == null ? undefined : json['role'],
    };
}
export function AppRoleLoginResponseToJSON(json) {
    return AppRoleLoginResponseToJSONTyped(json, false);
}
export function AppRoleLoginResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'role': value['role'],
    };
}
