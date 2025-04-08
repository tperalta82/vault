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
 * @interface SystemWriteManagedKeysTypeNameTestSignRequest
 */
export interface SystemWriteManagedKeysTypeNameTestSignRequest {
    /**
     * The hashing algorithm to use when signing/verifying the random data.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameTestSignRequest
     */
    hashAlgorithm?: string;
    /**
     * For RSA backed managed keys attempt to sign with PSS
     * @type {boolean}
     * @memberof SystemWriteManagedKeysTypeNameTestSignRequest
     */
    usePss?: boolean;
}

/**
 * Check if a given object implements the SystemWriteManagedKeysTypeNameTestSignRequest interface.
 */
export function instanceOfSystemWriteManagedKeysTypeNameTestSignRequest(value: object): value is SystemWriteManagedKeysTypeNameTestSignRequest {
    return true;
}

export function SystemWriteManagedKeysTypeNameTestSignRequestFromJSON(json: any): SystemWriteManagedKeysTypeNameTestSignRequest {
    return SystemWriteManagedKeysTypeNameTestSignRequestFromJSONTyped(json, false);
}

export function SystemWriteManagedKeysTypeNameTestSignRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteManagedKeysTypeNameTestSignRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'hashAlgorithm': json['hash_algorithm'] == null ? undefined : json['hash_algorithm'],
        'usePss': json['use_pss'] == null ? undefined : json['use_pss'],
    };
}

export function SystemWriteManagedKeysTypeNameTestSignRequestToJSON(json: any): SystemWriteManagedKeysTypeNameTestSignRequest {
    return SystemWriteManagedKeysTypeNameTestSignRequestToJSONTyped(json, false);
}

export function SystemWriteManagedKeysTypeNameTestSignRequestToJSONTyped(value?: SystemWriteManagedKeysTypeNameTestSignRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'hash_algorithm': value['hashAlgorithm'],
        'use_pss': value['usePss'],
    };
}

