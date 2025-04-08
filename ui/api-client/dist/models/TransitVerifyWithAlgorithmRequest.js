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
exports.instanceOfTransitVerifyWithAlgorithmRequest = instanceOfTransitVerifyWithAlgorithmRequest;
exports.TransitVerifyWithAlgorithmRequestFromJSON = TransitVerifyWithAlgorithmRequestFromJSON;
exports.TransitVerifyWithAlgorithmRequestFromJSONTyped = TransitVerifyWithAlgorithmRequestFromJSONTyped;
exports.TransitVerifyWithAlgorithmRequestToJSON = TransitVerifyWithAlgorithmRequestToJSON;
exports.TransitVerifyWithAlgorithmRequestToJSONTyped = TransitVerifyWithAlgorithmRequestToJSONTyped;
/**
 * Check if a given object implements the TransitVerifyWithAlgorithmRequest interface.
 */
function instanceOfTransitVerifyWithAlgorithmRequest(value) {
    return true;
}
function TransitVerifyWithAlgorithmRequestFromJSON(json) {
    return TransitVerifyWithAlgorithmRequestFromJSONTyped(json, false);
}
function TransitVerifyWithAlgorithmRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'algorithm': json['algorithm'] == null ? undefined : json['algorithm'],
        'batchInput': json['batch_input'] == null ? undefined : json['batch_input'],
        'cmac': json['cmac'] == null ? undefined : json['cmac'],
        'context': json['context'] == null ? undefined : json['context'],
        'hashAlgorithm': json['hash_algorithm'] == null ? undefined : json['hash_algorithm'],
        'hmac': json['hmac'] == null ? undefined : json['hmac'],
        'input': json['input'] == null ? undefined : json['input'],
        'macLength': json['mac_length'] == null ? undefined : json['mac_length'],
        'marshalingAlgorithm': json['marshaling_algorithm'] == null ? undefined : json['marshaling_algorithm'],
        'prehashed': json['prehashed'] == null ? undefined : json['prehashed'],
        'saltLength': json['salt_length'] == null ? undefined : json['salt_length'],
        'signature': json['signature'] == null ? undefined : json['signature'],
        'signatureAlgorithm': json['signature_algorithm'] == null ? undefined : json['signature_algorithm'],
        'signatureContext': json['signature_context'] == null ? undefined : json['signature_context'],
    };
}
function TransitVerifyWithAlgorithmRequestToJSON(json) {
    return TransitVerifyWithAlgorithmRequestToJSONTyped(json, false);
}
function TransitVerifyWithAlgorithmRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'algorithm': value['algorithm'],
        'batch_input': value['batchInput'],
        'cmac': value['cmac'],
        'context': value['context'],
        'hash_algorithm': value['hashAlgorithm'],
        'hmac': value['hmac'],
        'input': value['input'],
        'mac_length': value['macLength'],
        'marshaling_algorithm': value['marshalingAlgorithm'],
        'prehashed': value['prehashed'],
        'salt_length': value['saltLength'],
        'signature': value['signature'],
        'signature_algorithm': value['signatureAlgorithm'],
        'signature_context': value['signatureContext'],
    };
}
