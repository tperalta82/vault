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
 * @interface LeasesReadLeaseResponse
 */
export interface LeasesReadLeaseResponse {
    /**
     * Optional lease expiry time
     * @type {Date}
     * @memberof LeasesReadLeaseResponse
     */
    expireTime?: Date;
    /**
     * Lease id
     * @type {string}
     * @memberof LeasesReadLeaseResponse
     */
    id?: string;
    /**
     * Timestamp for the lease's issue time
     * @type {Date}
     * @memberof LeasesReadLeaseResponse
     */
    issueTime?: Date;
    /**
     * Optional Timestamp of the last time the lease was renewed
     * @type {Date}
     * @memberof LeasesReadLeaseResponse
     */
    lastRenewal?: Date;
    /**
     * True if the lease is able to be renewed
     * @type {boolean}
     * @memberof LeasesReadLeaseResponse
     */
    renewable?: boolean;
    /**
     * Time to Live set for the lease, returns 0 if unset
     * @type {number}
     * @memberof LeasesReadLeaseResponse
     */
    ttl?: number;
}

/**
 * Check if a given object implements the LeasesReadLeaseResponse interface.
 */
export function instanceOfLeasesReadLeaseResponse(value: object): value is LeasesReadLeaseResponse {
    return true;
}

export function LeasesReadLeaseResponseFromJSON(json: any): LeasesReadLeaseResponse {
    return LeasesReadLeaseResponseFromJSONTyped(json, false);
}

export function LeasesReadLeaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LeasesReadLeaseResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'expireTime': json['expire_time'] == null ? undefined : (new Date(json['expire_time'])),
        'id': json['id'] == null ? undefined : json['id'],
        'issueTime': json['issue_time'] == null ? undefined : (new Date(json['issue_time'])),
        'lastRenewal': json['last_renewal'] == null ? undefined : (new Date(json['last_renewal'])),
        'renewable': json['renewable'] == null ? undefined : json['renewable'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
    };
}

export function LeasesReadLeaseResponseToJSON(json: any): LeasesReadLeaseResponse {
    return LeasesReadLeaseResponseToJSONTyped(json, false);
}

export function LeasesReadLeaseResponseToJSONTyped(value?: LeasesReadLeaseResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'expire_time': value['expireTime'] == null ? undefined : ((value['expireTime']).toISOString()),
        'id': value['id'],
        'issue_time': value['issueTime'] == null ? undefined : ((value['issueTime']).toISOString()),
        'last_renewal': value['lastRenewal'] == null ? undefined : ((value['lastRenewal']).toISOString()),
        'renewable': value['renewable'],
        'ttl': value['ttl'],
    };
}

