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
 * @interface PkiConfigureIssuersRequest
 */
export interface PkiConfigureIssuersRequest {
    /**
     * Reference (name or identifier) to the default issuer.
     * @type {string}
     * @memberof PkiConfigureIssuersRequest
     */
    _default?: string;
    /**
     * Whether the default issuer should automatically follow the latest generated or imported issuer. Defaults to false.
     * @type {boolean}
     * @memberof PkiConfigureIssuersRequest
     */
    defaultFollowsLatestIssuer?: boolean;
}

/**
 * Check if a given object implements the PkiConfigureIssuersRequest interface.
 */
export function instanceOfPkiConfigureIssuersRequest(value: object): value is PkiConfigureIssuersRequest {
    return true;
}

export function PkiConfigureIssuersRequestFromJSON(json: any): PkiConfigureIssuersRequest {
    return PkiConfigureIssuersRequestFromJSONTyped(json, false);
}

export function PkiConfigureIssuersRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiConfigureIssuersRequest {
    if (json == null) {
        return json;
    }
    return {
        
        '_default': json['default'] == null ? undefined : json['default'],
        'defaultFollowsLatestIssuer': json['default_follows_latest_issuer'] == null ? undefined : json['default_follows_latest_issuer'],
    };
}

export function PkiConfigureIssuersRequestToJSON(json: any): PkiConfigureIssuersRequest {
    return PkiConfigureIssuersRequestToJSONTyped(json, false);
}

export function PkiConfigureIssuersRequestToJSONTyped(value?: PkiConfigureIssuersRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'default': value['_default'],
        'default_follows_latest_issuer': value['defaultFollowsLatestIssuer'],
    };
}

