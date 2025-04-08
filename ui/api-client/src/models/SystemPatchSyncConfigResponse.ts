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
 * @interface SystemPatchSyncConfigResponse
 */
export interface SystemPatchSyncConfigResponse {
    /**
     * Disables the syncing process between Vault and external destinations.
     * @type {boolean}
     * @memberof SystemPatchSyncConfigResponse
     */
    disabled?: boolean;
    /**
     * Maximum number of pending sync operations allowed on the queue.
     * @type {number}
     * @memberof SystemPatchSyncConfigResponse
     */
    queueCapacity?: number;
}

/**
 * Check if a given object implements the SystemPatchSyncConfigResponse interface.
 */
export function instanceOfSystemPatchSyncConfigResponse(value: object): value is SystemPatchSyncConfigResponse {
    return true;
}

export function SystemPatchSyncConfigResponseFromJSON(json: any): SystemPatchSyncConfigResponse {
    return SystemPatchSyncConfigResponseFromJSONTyped(json, false);
}

export function SystemPatchSyncConfigResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemPatchSyncConfigResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'disabled': json['disabled'] == null ? undefined : json['disabled'],
        'queueCapacity': json['queue_capacity'] == null ? undefined : json['queue_capacity'],
    };
}

export function SystemPatchSyncConfigResponseToJSON(json: any): SystemPatchSyncConfigResponse {
    return SystemPatchSyncConfigResponseToJSONTyped(json, false);
}

export function SystemPatchSyncConfigResponseToJSONTyped(value?: SystemPatchSyncConfigResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'disabled': value['disabled'],
        'queue_capacity': value['queueCapacity'],
    };
}

