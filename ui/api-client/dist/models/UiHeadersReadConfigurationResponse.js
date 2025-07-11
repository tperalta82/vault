"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfUiHeadersReadConfigurationResponse = instanceOfUiHeadersReadConfigurationResponse;
exports.UiHeadersReadConfigurationResponseFromJSON = UiHeadersReadConfigurationResponseFromJSON;
exports.UiHeadersReadConfigurationResponseFromJSONTyped = UiHeadersReadConfigurationResponseFromJSONTyped;
exports.UiHeadersReadConfigurationResponseToJSON = UiHeadersReadConfigurationResponseToJSON;
exports.UiHeadersReadConfigurationResponseToJSONTyped = UiHeadersReadConfigurationResponseToJSONTyped;
/**
 * Check if a given object implements the UiHeadersReadConfigurationResponse interface.
 */
function instanceOfUiHeadersReadConfigurationResponse(value) {
    return true;
}
function UiHeadersReadConfigurationResponseFromJSON(json) {
    return UiHeadersReadConfigurationResponseFromJSONTyped(json, false);
}
function UiHeadersReadConfigurationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'value': json['value'] == null ? undefined : json['value'],
        'values': json['values'] == null ? undefined : json['values'],
    };
}
function UiHeadersReadConfigurationResponseToJSON(json) {
    return UiHeadersReadConfigurationResponseToJSONTyped(json, false);
}
function UiHeadersReadConfigurationResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'value': value['value'],
        'values': value['values'],
    };
}
