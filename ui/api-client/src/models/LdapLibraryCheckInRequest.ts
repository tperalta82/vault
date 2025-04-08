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
 * @interface LdapLibraryCheckInRequest
 */
export interface LdapLibraryCheckInRequest {
    /**
     * The username/logon name for the service accounts to check in.
     * @type {Array<string>}
     * @memberof LdapLibraryCheckInRequest
     */
    serviceAccountNames?: Array<string>;
}

/**
 * Check if a given object implements the LdapLibraryCheckInRequest interface.
 */
export function instanceOfLdapLibraryCheckInRequest(value: object): value is LdapLibraryCheckInRequest {
    return true;
}

export function LdapLibraryCheckInRequestFromJSON(json: any): LdapLibraryCheckInRequest {
    return LdapLibraryCheckInRequestFromJSONTyped(json, false);
}

export function LdapLibraryCheckInRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LdapLibraryCheckInRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'serviceAccountNames': json['service_account_names'] == null ? undefined : json['service_account_names'],
    };
}

export function LdapLibraryCheckInRequestToJSON(json: any): LdapLibraryCheckInRequest {
    return LdapLibraryCheckInRequestToJSONTyped(json, false);
}

export function LdapLibraryCheckInRequestToJSONTyped(value?: LdapLibraryCheckInRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'service_account_names': value['serviceAccountNames'],
    };
}

