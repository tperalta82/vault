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
 * @interface OciLoginRequest
 */
export interface OciLoginRequest {
    /**
     * The signed headers of the client
     * @type {string}
     * @memberof OciLoginRequest
     */
    requestHeaders?: string;
}

/**
 * Check if a given object implements the OciLoginRequest interface.
 */
export function instanceOfOciLoginRequest(value: object): value is OciLoginRequest {
    return true;
}

export function OciLoginRequestFromJSON(json: any): OciLoginRequest {
    return OciLoginRequestFromJSONTyped(json, false);
}

export function OciLoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OciLoginRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'requestHeaders': json['request_headers'] == null ? undefined : json['request_headers'],
    };
}

export function OciLoginRequestToJSON(json: any): OciLoginRequest {
    return OciLoginRequestToJSONTyped(json, false);
}

export function OciLoginRequestToJSONTyped(value?: OciLoginRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'request_headers': value['requestHeaders'],
    };
}

