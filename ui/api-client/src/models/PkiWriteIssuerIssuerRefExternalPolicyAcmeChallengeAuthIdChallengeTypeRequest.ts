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
 * @interface PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest
 */
export interface PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest
     */
    signature?: string;
}

/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest interface.
 */
export function instanceOfPkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest(value: object): value is PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest {
    return true;
}

export function PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequestFromJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest {
    return PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequestFromJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'payload': json['payload'] == null ? undefined : json['payload'],
        '_protected': json['protected'] == null ? undefined : json['protected'],
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}

export function PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequestToJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest {
    return PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequestToJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequestToJSONTyped(value?: PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'payload': value['payload'],
        'protected': value['_protected'],
        'signature': value['signature'],
    };
}

