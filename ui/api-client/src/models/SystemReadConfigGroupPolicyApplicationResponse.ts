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
 * @interface SystemReadConfigGroupPolicyApplicationResponse
 */
export interface SystemReadConfigGroupPolicyApplicationResponse {
    /**
     * The current-set group_policy_application_mode. Will be either within_namespace_hierarchy or any.
     * @type {string}
     * @memberof SystemReadConfigGroupPolicyApplicationResponse
     */
    groupPolicyApplicationMode?: string;
}

/**
 * Check if a given object implements the SystemReadConfigGroupPolicyApplicationResponse interface.
 */
export function instanceOfSystemReadConfigGroupPolicyApplicationResponse(value: object): value is SystemReadConfigGroupPolicyApplicationResponse {
    return true;
}

export function SystemReadConfigGroupPolicyApplicationResponseFromJSON(json: any): SystemReadConfigGroupPolicyApplicationResponse {
    return SystemReadConfigGroupPolicyApplicationResponseFromJSONTyped(json, false);
}

export function SystemReadConfigGroupPolicyApplicationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemReadConfigGroupPolicyApplicationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'groupPolicyApplicationMode': json['group_policy_application_mode'] == null ? undefined : json['group_policy_application_mode'],
    };
}

export function SystemReadConfigGroupPolicyApplicationResponseToJSON(json: any): SystemReadConfigGroupPolicyApplicationResponse {
    return SystemReadConfigGroupPolicyApplicationResponseToJSONTyped(json, false);
}

export function SystemReadConfigGroupPolicyApplicationResponseToJSONTyped(value?: SystemReadConfigGroupPolicyApplicationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'group_policy_application_mode': value['groupPolicyApplicationMode'],
    };
}

