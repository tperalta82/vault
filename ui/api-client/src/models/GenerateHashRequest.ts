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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GenerateHashRequest
 */
export interface GenerateHashRequest {
    /**
     * Algorithm to use (POST body parameter). Valid values are: * sha2-224 * sha2-256 * sha2-384 * sha2-512 Defaults to "sha2-256".
     * @type {string}
     * @memberof GenerateHashRequest
     */
    algorithm?: string;
    /**
     * Encoding format to use. Can be "hex" or "base64". Defaults to "hex".
     * @type {string}
     * @memberof GenerateHashRequest
     */
    format?: string;
    /**
     * The base64-encoded input data
     * @type {string}
     * @memberof GenerateHashRequest
     */
    input?: string;
}

/**
 * Check if a given object implements the GenerateHashRequest interface.
 */
export function instanceOfGenerateHashRequest(value: object): value is GenerateHashRequest {
    return true;
}

export function GenerateHashRequestFromJSON(json: any): GenerateHashRequest {
    return GenerateHashRequestFromJSONTyped(json, false);
}

export function GenerateHashRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateHashRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'algorithm': json['algorithm'] == null ? undefined : json['algorithm'],
        'format': json['format'] == null ? undefined : json['format'],
        'input': json['input'] == null ? undefined : json['input'],
    };
}

export function GenerateHashRequestToJSON(json: any): GenerateHashRequest {
    return GenerateHashRequestToJSONTyped(json, false);
}

export function GenerateHashRequestToJSONTyped(value?: GenerateHashRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'algorithm': value['algorithm'],
        'format': value['format'],
        'input': value['input'],
    };
}

