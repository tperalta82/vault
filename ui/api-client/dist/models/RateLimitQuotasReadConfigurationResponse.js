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
exports.instanceOfRateLimitQuotasReadConfigurationResponse = instanceOfRateLimitQuotasReadConfigurationResponse;
exports.RateLimitQuotasReadConfigurationResponseFromJSON = RateLimitQuotasReadConfigurationResponseFromJSON;
exports.RateLimitQuotasReadConfigurationResponseFromJSONTyped = RateLimitQuotasReadConfigurationResponseFromJSONTyped;
exports.RateLimitQuotasReadConfigurationResponseToJSON = RateLimitQuotasReadConfigurationResponseToJSON;
exports.RateLimitQuotasReadConfigurationResponseToJSONTyped = RateLimitQuotasReadConfigurationResponseToJSONTyped;
/**
 * Check if a given object implements the RateLimitQuotasReadConfigurationResponse interface.
 */
function instanceOfRateLimitQuotasReadConfigurationResponse(value) {
    return true;
}
function RateLimitQuotasReadConfigurationResponseFromJSON(json) {
    return RateLimitQuotasReadConfigurationResponseFromJSONTyped(json, false);
}
function RateLimitQuotasReadConfigurationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'absoluteRateLimitExemptPaths': json['absolute_rate_limit_exempt_paths'] == null ? undefined : json['absolute_rate_limit_exempt_paths'],
        'enableRateLimitAuditLogging': json['enable_rate_limit_audit_logging'] == null ? undefined : json['enable_rate_limit_audit_logging'],
        'enableRateLimitResponseHeaders': json['enable_rate_limit_response_headers'] == null ? undefined : json['enable_rate_limit_response_headers'],
        'rateLimitExemptPaths': json['rate_limit_exempt_paths'] == null ? undefined : json['rate_limit_exempt_paths'],
    };
}
function RateLimitQuotasReadConfigurationResponseToJSON(json) {
    return RateLimitQuotasReadConfigurationResponseToJSONTyped(json, false);
}
function RateLimitQuotasReadConfigurationResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'absolute_rate_limit_exempt_paths': value['absoluteRateLimitExemptPaths'],
        'enable_rate_limit_audit_logging': value['enableRateLimitAuditLogging'],
        'enable_rate_limit_response_headers': value['enableRateLimitResponseHeaders'],
        'rate_limit_exempt_paths': value['rateLimitExemptPaths'],
    };
}
