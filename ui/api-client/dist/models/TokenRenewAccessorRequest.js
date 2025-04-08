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
exports.instanceOfTokenRenewAccessorRequest = instanceOfTokenRenewAccessorRequest;
exports.TokenRenewAccessorRequestFromJSON = TokenRenewAccessorRequestFromJSON;
exports.TokenRenewAccessorRequestFromJSONTyped = TokenRenewAccessorRequestFromJSONTyped;
exports.TokenRenewAccessorRequestToJSON = TokenRenewAccessorRequestToJSON;
exports.TokenRenewAccessorRequestToJSONTyped = TokenRenewAccessorRequestToJSONTyped;
/**
 * Check if a given object implements the TokenRenewAccessorRequest interface.
 */
function instanceOfTokenRenewAccessorRequest(value) {
    return true;
}
function TokenRenewAccessorRequestFromJSON(json) {
    return TokenRenewAccessorRequestFromJSONTyped(json, false);
}
function TokenRenewAccessorRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'accessor': json['accessor'] == null ? undefined : json['accessor'],
        'increment': json['increment'] == null ? undefined : json['increment'],
    };
}
function TokenRenewAccessorRequestToJSON(json) {
    return TokenRenewAccessorRequestToJSONTyped(json, false);
}
function TokenRenewAccessorRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'accessor': value['accessor'],
        'increment': value['increment'],
    };
}
