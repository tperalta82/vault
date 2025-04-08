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
exports.instanceOfAuditingEnableDeviceRequest = instanceOfAuditingEnableDeviceRequest;
exports.AuditingEnableDeviceRequestFromJSON = AuditingEnableDeviceRequestFromJSON;
exports.AuditingEnableDeviceRequestFromJSONTyped = AuditingEnableDeviceRequestFromJSONTyped;
exports.AuditingEnableDeviceRequestToJSON = AuditingEnableDeviceRequestToJSON;
exports.AuditingEnableDeviceRequestToJSONTyped = AuditingEnableDeviceRequestToJSONTyped;
/**
 * Check if a given object implements the AuditingEnableDeviceRequest interface.
 */
function instanceOfAuditingEnableDeviceRequest(value) {
    return true;
}
function AuditingEnableDeviceRequestFromJSON(json) {
    return AuditingEnableDeviceRequestFromJSONTyped(json, false);
}
function AuditingEnableDeviceRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'description': json['description'] == null ? undefined : json['description'],
        'local': json['local'] == null ? undefined : json['local'],
        'options': json['options'] == null ? undefined : json['options'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}
function AuditingEnableDeviceRequestToJSON(json) {
    return AuditingEnableDeviceRequestToJSONTyped(json, false);
}
function AuditingEnableDeviceRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'description': value['description'],
        'local': value['local'],
        'options': value['options'],
        'type': value['type'],
    };
}
