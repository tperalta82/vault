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
 * @interface RekeyVerificationUpdateResponse
 */
export interface RekeyVerificationUpdateResponse {
    /**
     * 
     * @type {boolean}
     * @memberof RekeyVerificationUpdateResponse
     */
    complete?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RekeyVerificationUpdateResponse
     */
    nonce?: string;
}

/**
 * Check if a given object implements the RekeyVerificationUpdateResponse interface.
 */
export function instanceOfRekeyVerificationUpdateResponse(value: object): value is RekeyVerificationUpdateResponse {
    return true;
}

export function RekeyVerificationUpdateResponseFromJSON(json: any): RekeyVerificationUpdateResponse {
    return RekeyVerificationUpdateResponseFromJSONTyped(json, false);
}

export function RekeyVerificationUpdateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RekeyVerificationUpdateResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'complete': json['complete'] == null ? undefined : json['complete'],
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
    };
}

export function RekeyVerificationUpdateResponseToJSON(json: any): RekeyVerificationUpdateResponse {
    return RekeyVerificationUpdateResponseToJSONTyped(json, false);
}

export function RekeyVerificationUpdateResponseToJSONTyped(value?: RekeyVerificationUpdateResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'complete': value['complete'],
        'nonce': value['nonce'],
    };
}

