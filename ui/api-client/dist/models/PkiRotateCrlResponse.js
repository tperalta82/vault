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
exports.instanceOfPkiRotateCrlResponse = instanceOfPkiRotateCrlResponse;
exports.PkiRotateCrlResponseFromJSON = PkiRotateCrlResponseFromJSON;
exports.PkiRotateCrlResponseFromJSONTyped = PkiRotateCrlResponseFromJSONTyped;
exports.PkiRotateCrlResponseToJSON = PkiRotateCrlResponseToJSON;
exports.PkiRotateCrlResponseToJSONTyped = PkiRotateCrlResponseToJSONTyped;
/**
 * Check if a given object implements the PkiRotateCrlResponse interface.
 */
function instanceOfPkiRotateCrlResponse(value) {
    return true;
}
function PkiRotateCrlResponseFromJSON(json) {
    return PkiRotateCrlResponseFromJSONTyped(json, false);
}
function PkiRotateCrlResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'success': json['success'] == null ? undefined : json['success'],
    };
}
function PkiRotateCrlResponseToJSON(json) {
    return PkiRotateCrlResponseToJSONTyped(json, false);
}
function PkiRotateCrlResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'success': value['success'],
    };
}
