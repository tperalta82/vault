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
 * @interface PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequest
 */
export interface PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequest
     */
    signature?: string;
}

/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequest interface.
 */
export function instanceOfPkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequest(value: object): value is PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequest {
    return true;
}

export function PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequestFromJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequest {
    return PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequestFromJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'payload': json['payload'] == null ? undefined : json['payload'],
        '_protected': json['protected'] == null ? undefined : json['protected'],
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}

export function PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequestToJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequest {
    return PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequestToJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequestToJSONTyped(value?: PkiWriteIssuerIssuerRefExternalPolicyAcmeOrderOrderIdFinalizeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'payload': value['payload'],
        'protected': value['_protected'],
        'signature': value['signature'],
    };
}

