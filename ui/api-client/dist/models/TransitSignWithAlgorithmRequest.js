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
exports.instanceOfTransitSignWithAlgorithmRequest = instanceOfTransitSignWithAlgorithmRequest;
exports.TransitSignWithAlgorithmRequestFromJSON = TransitSignWithAlgorithmRequestFromJSON;
exports.TransitSignWithAlgorithmRequestFromJSONTyped = TransitSignWithAlgorithmRequestFromJSONTyped;
exports.TransitSignWithAlgorithmRequestToJSON = TransitSignWithAlgorithmRequestToJSON;
exports.TransitSignWithAlgorithmRequestToJSONTyped = TransitSignWithAlgorithmRequestToJSONTyped;
/**
 * Check if a given object implements the TransitSignWithAlgorithmRequest interface.
 */
function instanceOfTransitSignWithAlgorithmRequest(value) {
    return true;
}
function TransitSignWithAlgorithmRequestFromJSON(json) {
    return TransitSignWithAlgorithmRequestFromJSONTyped(json, false);
}
function TransitSignWithAlgorithmRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'algorithm': json['algorithm'] == null ? undefined : json['algorithm'],
        'batchInput': json['batch_input'] == null ? undefined : json['batch_input'],
        'context': json['context'] == null ? undefined : json['context'],
        'hashAlgorithm': json['hash_algorithm'] == null ? undefined : json['hash_algorithm'],
        'input': json['input'] == null ? undefined : json['input'],
        'keyVersion': json['key_version'] == null ? undefined : json['key_version'],
        'marshalingAlgorithm': json['marshaling_algorithm'] == null ? undefined : json['marshaling_algorithm'],
        'prehashed': json['prehashed'] == null ? undefined : json['prehashed'],
        'saltLength': json['salt_length'] == null ? undefined : json['salt_length'],
        'signatureAlgorithm': json['signature_algorithm'] == null ? undefined : json['signature_algorithm'],
        'signatureContext': json['signature_context'] == null ? undefined : json['signature_context'],
    };
}
function TransitSignWithAlgorithmRequestToJSON(json) {
    return TransitSignWithAlgorithmRequestToJSONTyped(json, false);
}
function TransitSignWithAlgorithmRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'algorithm': value['algorithm'],
        'batch_input': value['batchInput'],
        'context': value['context'],
        'hash_algorithm': value['hashAlgorithm'],
        'input': value['input'],
        'key_version': value['keyVersion'],
        'marshaling_algorithm': value['marshalingAlgorithm'],
        'prehashed': value['prehashed'],
        'salt_length': value['saltLength'],
        'signature_algorithm': value['signatureAlgorithm'],
        'signature_context': value['signatureContext'],
    };
}
