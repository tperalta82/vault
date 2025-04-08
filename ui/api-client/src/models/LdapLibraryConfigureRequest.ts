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
 * @interface LdapLibraryConfigureRequest
 */
export interface LdapLibraryConfigureRequest {
    /**
     * Disable the default behavior of requiring that check-ins are performed by the entity that checked them out.
     * @type {boolean}
     * @memberof LdapLibraryConfigureRequest
     */
    disableCheckInEnforcement?: boolean;
    /**
     * In seconds, the max amount of time a check-out's renewals should last. Defaults to 24 hours.
     * @type {string}
     * @memberof LdapLibraryConfigureRequest
     */
    maxTtl?: string;
    /**
     * The username/logon name for the service accounts with which this set will be associated.
     * @type {Array<string>}
     * @memberof LdapLibraryConfigureRequest
     */
    serviceAccountNames?: Array<string>;
    /**
     * In seconds, the amount of time a check-out should last. Defaults to 24 hours.
     * @type {string}
     * @memberof LdapLibraryConfigureRequest
     */
    ttl?: string;
}

/**
 * Check if a given object implements the LdapLibraryConfigureRequest interface.
 */
export function instanceOfLdapLibraryConfigureRequest(value: object): value is LdapLibraryConfigureRequest {
    return true;
}

export function LdapLibraryConfigureRequestFromJSON(json: any): LdapLibraryConfigureRequest {
    return LdapLibraryConfigureRequestFromJSONTyped(json, false);
}

export function LdapLibraryConfigureRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LdapLibraryConfigureRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'disableCheckInEnforcement': json['disable_check_in_enforcement'] == null ? undefined : json['disable_check_in_enforcement'],
        'maxTtl': json['max_ttl'] == null ? undefined : json['max_ttl'],
        'serviceAccountNames': json['service_account_names'] == null ? undefined : json['service_account_names'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
    };
}

export function LdapLibraryConfigureRequestToJSON(json: any): LdapLibraryConfigureRequest {
    return LdapLibraryConfigureRequestToJSONTyped(json, false);
}

export function LdapLibraryConfigureRequestToJSONTyped(value?: LdapLibraryConfigureRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'disable_check_in_enforcement': value['disableCheckInEnforcement'],
        'max_ttl': value['maxTtl'],
        'service_account_names': value['serviceAccountNames'],
        'ttl': value['ttl'],
    };
}

