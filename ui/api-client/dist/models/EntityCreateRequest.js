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
exports.instanceOfEntityCreateRequest = instanceOfEntityCreateRequest;
exports.EntityCreateRequestFromJSON = EntityCreateRequestFromJSON;
exports.EntityCreateRequestFromJSONTyped = EntityCreateRequestFromJSONTyped;
exports.EntityCreateRequestToJSON = EntityCreateRequestToJSON;
exports.EntityCreateRequestToJSONTyped = EntityCreateRequestToJSONTyped;
/**
 * Check if a given object implements the EntityCreateRequest interface.
 */
function instanceOfEntityCreateRequest(value) {
    return true;
}
function EntityCreateRequestFromJSON(json) {
    return EntityCreateRequestFromJSONTyped(json, false);
}
function EntityCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'disabled': json['disabled'] == null ? undefined : json['disabled'],
        'id': json['id'] == null ? undefined : json['id'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'name': json['name'] == null ? undefined : json['name'],
        'policies': json['policies'] == null ? undefined : json['policies'],
    };
}
function EntityCreateRequestToJSON(json) {
    return EntityCreateRequestToJSONTyped(json, false);
}
function EntityCreateRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'disabled': value['disabled'],
        'id': value['id'],
        'metadata': value['metadata'],
        'name': value['name'],
        'policies': value['policies'],
    };
}
