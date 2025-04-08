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
 * @interface PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequest
 */
export interface PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequest
     */
    signature?: string;
}

/**
 * Check if a given object implements the PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequest interface.
 */
export function instanceOfPkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequest(value: object): value is PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequest {
    return true;
}

export function PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequestFromJSON(json: any): PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequest {
    return PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequestFromJSONTyped(json, false);
}

export function PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'payload': json['payload'] == null ? undefined : json['payload'],
        '_protected': json['protected'] == null ? undefined : json['protected'],
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}

export function PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequestToJSON(json: any): PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequest {
    return PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequestToJSONTyped(json, false);
}

export function PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequestToJSONTyped(value?: PkiWriteExternalPolicyAcmeOrderOrderIdFinalizeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'payload': value['payload'],
        'protected': value['_protected'],
        'signature': value['signature'],
    };
}

