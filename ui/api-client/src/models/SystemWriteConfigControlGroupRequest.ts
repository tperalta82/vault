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
 * @interface SystemWriteConfigControlGroupRequest
 */
export interface SystemWriteConfigControlGroupRequest {
    /**
     * The max TTL for a control group token.
     * @type {string}
     * @memberof SystemWriteConfigControlGroupRequest
     */
    maxTtl?: string;
}

/**
 * Check if a given object implements the SystemWriteConfigControlGroupRequest interface.
 */
export function instanceOfSystemWriteConfigControlGroupRequest(value: object): value is SystemWriteConfigControlGroupRequest {
    return true;
}

export function SystemWriteConfigControlGroupRequestFromJSON(json: any): SystemWriteConfigControlGroupRequest {
    return SystemWriteConfigControlGroupRequestFromJSONTyped(json, false);
}

export function SystemWriteConfigControlGroupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteConfigControlGroupRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'maxTtl': json['max_ttl'] == null ? undefined : json['max_ttl'],
    };
}

export function SystemWriteConfigControlGroupRequestToJSON(json: any): SystemWriteConfigControlGroupRequest {
    return SystemWriteConfigControlGroupRequestToJSONTyped(json, false);
}

export function SystemWriteConfigControlGroupRequestToJSONTyped(value?: SystemWriteConfigControlGroupRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'max_ttl': value['maxTtl'],
    };
}

