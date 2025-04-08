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
 * @interface AwsTidyRoleTagDenyListRequest
 */
export interface AwsTidyRoleTagDenyListRequest {
    /**
     * The amount of extra time that must have passed beyond the roletag expiration, before it is removed from the backend storage.
     * @type {string}
     * @memberof AwsTidyRoleTagDenyListRequest
     */
    safetyBuffer?: string;
}

/**
 * Check if a given object implements the AwsTidyRoleTagDenyListRequest interface.
 */
export function instanceOfAwsTidyRoleTagDenyListRequest(value: object): value is AwsTidyRoleTagDenyListRequest {
    return true;
}

export function AwsTidyRoleTagDenyListRequestFromJSON(json: any): AwsTidyRoleTagDenyListRequest {
    return AwsTidyRoleTagDenyListRequestFromJSONTyped(json, false);
}

export function AwsTidyRoleTagDenyListRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwsTidyRoleTagDenyListRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'safetyBuffer': json['safety_buffer'] == null ? undefined : json['safety_buffer'],
    };
}

export function AwsTidyRoleTagDenyListRequestToJSON(json: any): AwsTidyRoleTagDenyListRequest {
    return AwsTidyRoleTagDenyListRequestToJSONTyped(json, false);
}

export function AwsTidyRoleTagDenyListRequestToJSONTyped(value?: AwsTidyRoleTagDenyListRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'safety_buffer': value['safetyBuffer'],
    };
}

