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
 * @interface PkiWriteExternalPolicyPolicyAcmeAccountKidRequest
 */
export interface PkiWriteExternalPolicyPolicyAcmeAccountKidRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyPolicyAcmeAccountKidRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyPolicyAcmeAccountKidRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyPolicyAcmeAccountKidRequest
     */
    signature?: string;
}

/**
 * Check if a given object implements the PkiWriteExternalPolicyPolicyAcmeAccountKidRequest interface.
 */
export function instanceOfPkiWriteExternalPolicyPolicyAcmeAccountKidRequest(value: object): value is PkiWriteExternalPolicyPolicyAcmeAccountKidRequest {
    return true;
}

export function PkiWriteExternalPolicyPolicyAcmeAccountKidRequestFromJSON(json: any): PkiWriteExternalPolicyPolicyAcmeAccountKidRequest {
    return PkiWriteExternalPolicyPolicyAcmeAccountKidRequestFromJSONTyped(json, false);
}

export function PkiWriteExternalPolicyPolicyAcmeAccountKidRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteExternalPolicyPolicyAcmeAccountKidRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'payload': json['payload'] == null ? undefined : json['payload'],
        '_protected': json['protected'] == null ? undefined : json['protected'],
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}

export function PkiWriteExternalPolicyPolicyAcmeAccountKidRequestToJSON(json: any): PkiWriteExternalPolicyPolicyAcmeAccountKidRequest {
    return PkiWriteExternalPolicyPolicyAcmeAccountKidRequestToJSONTyped(json, false);
}

export function PkiWriteExternalPolicyPolicyAcmeAccountKidRequestToJSONTyped(value?: PkiWriteExternalPolicyPolicyAcmeAccountKidRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'payload': value['payload'],
        'protected': value['_protected'],
        'signature': value['signature'],
    };
}

