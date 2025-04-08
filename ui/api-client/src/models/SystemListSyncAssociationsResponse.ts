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
 * @interface SystemListSyncAssociationsResponse
 */
export interface SystemListSyncAssociationsResponse {
    /**
     * Map of associations listing all synced secret names regrouped by their mount.
     * @type {object}
     * @memberof SystemListSyncAssociationsResponse
     */
    keyInfo?: object;
    /**
     * List of mounts with at least one association.
     * @type {Array<object>}
     * @memberof SystemListSyncAssociationsResponse
     */
    keys?: Array<object>;
}

/**
 * Check if a given object implements the SystemListSyncAssociationsResponse interface.
 */
export function instanceOfSystemListSyncAssociationsResponse(value: object): value is SystemListSyncAssociationsResponse {
    return true;
}

export function SystemListSyncAssociationsResponseFromJSON(json: any): SystemListSyncAssociationsResponse {
    return SystemListSyncAssociationsResponseFromJSONTyped(json, false);
}

export function SystemListSyncAssociationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemListSyncAssociationsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'keyInfo': json['key_info'] == null ? undefined : json['key_info'],
        'keys': json['keys'] == null ? undefined : json['keys'],
    };
}

export function SystemListSyncAssociationsResponseToJSON(json: any): SystemListSyncAssociationsResponse {
    return SystemListSyncAssociationsResponseToJSONTyped(json, false);
}

export function SystemListSyncAssociationsResponseToJSONTyped(value?: SystemListSyncAssociationsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'key_info': value['keyInfo'],
        'keys': value['keys'],
    };
}

