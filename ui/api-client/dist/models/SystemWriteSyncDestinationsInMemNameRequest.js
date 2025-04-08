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
exports.instanceOfSystemWriteSyncDestinationsInMemNameRequest = instanceOfSystemWriteSyncDestinationsInMemNameRequest;
exports.SystemWriteSyncDestinationsInMemNameRequestFromJSON = SystemWriteSyncDestinationsInMemNameRequestFromJSON;
exports.SystemWriteSyncDestinationsInMemNameRequestFromJSONTyped = SystemWriteSyncDestinationsInMemNameRequestFromJSONTyped;
exports.SystemWriteSyncDestinationsInMemNameRequestToJSON = SystemWriteSyncDestinationsInMemNameRequestToJSON;
exports.SystemWriteSyncDestinationsInMemNameRequestToJSONTyped = SystemWriteSyncDestinationsInMemNameRequestToJSONTyped;
/**
 * Check if a given object implements the SystemWriteSyncDestinationsInMemNameRequest interface.
 */
function instanceOfSystemWriteSyncDestinationsInMemNameRequest(value) {
    return true;
}
function SystemWriteSyncDestinationsInMemNameRequestFromJSON(json) {
    return SystemWriteSyncDestinationsInMemNameRequestFromJSONTyped(json, false);
}
function SystemWriteSyncDestinationsInMemNameRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'allowedIpv4Addresses': json['allowed_ipv4_addresses'] == null ? undefined : json['allowed_ipv4_addresses'],
        'allowedIpv6Addresses': json['allowed_ipv6_addresses'] == null ? undefined : json['allowed_ipv6_addresses'],
        'allowedPorts': json['allowed_ports'] == null ? undefined : json['allowed_ports'],
        'disableStrictNetworking': json['disable_strict_networking'] == null ? undefined : json['disable_strict_networking'],
        'granularity': json['granularity'] == null ? undefined : json['granularity'],
        'purge': json['purge'] == null ? undefined : json['purge'],
        'secretNameTemplate': json['secret_name_template'] == null ? undefined : json['secret_name_template'],
    };
}
function SystemWriteSyncDestinationsInMemNameRequestToJSON(json) {
    return SystemWriteSyncDestinationsInMemNameRequestToJSONTyped(json, false);
}
function SystemWriteSyncDestinationsInMemNameRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'allowed_ipv4_addresses': value['allowedIpv4Addresses'],
        'allowed_ipv6_addresses': value['allowedIpv6Addresses'],
        'allowed_ports': value['allowedPorts'],
        'disable_strict_networking': value['disableStrictNetworking'],
        'granularity': value['granularity'],
        'purge': value['purge'],
        'secret_name_template': value['secretNameTemplate'],
    };
}
