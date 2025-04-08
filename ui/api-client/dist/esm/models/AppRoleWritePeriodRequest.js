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
 * Check if a given object implements the AppRoleWritePeriodRequest interface.
 */
export function instanceOfAppRoleWritePeriodRequest(value) {
    return true;
}
export function AppRoleWritePeriodRequestFromJSON(json) {
    return AppRoleWritePeriodRequestFromJSONTyped(json, false);
}
export function AppRoleWritePeriodRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'period': json['period'] == null ? undefined : json['period'],
        'tokenPeriod': json['token_period'] == null ? undefined : json['token_period'],
    };
}
export function AppRoleWritePeriodRequestToJSON(json) {
    return AppRoleWritePeriodRequestToJSONTyped(json, false);
}
export function AppRoleWritePeriodRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'period': value['period'],
        'token_period': value['tokenPeriod'],
    };
}
