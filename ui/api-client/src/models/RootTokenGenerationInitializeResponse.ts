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
 * @interface RootTokenGenerationInitializeResponse
 */
export interface RootTokenGenerationInitializeResponse {
    /**
     * 
     * @type {boolean}
     * @memberof RootTokenGenerationInitializeResponse
     */
    complete?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RootTokenGenerationInitializeResponse
     */
    encodedRootToken?: string;
    /**
     * 
     * @type {string}
     * @memberof RootTokenGenerationInitializeResponse
     */
    encodedToken?: string;
    /**
     * 
     * @type {string}
     * @memberof RootTokenGenerationInitializeResponse
     */
    nonce?: string;
    /**
     * 
     * @type {string}
     * @memberof RootTokenGenerationInitializeResponse
     */
    otp?: string;
    /**
     * 
     * @type {number}
     * @memberof RootTokenGenerationInitializeResponse
     */
    otpLength?: number;
    /**
     * 
     * @type {string}
     * @memberof RootTokenGenerationInitializeResponse
     */
    pgpFingerprint?: string;
    /**
     * 
     * @type {number}
     * @memberof RootTokenGenerationInitializeResponse
     */
    progress?: number;
    /**
     * 
     * @type {number}
     * @memberof RootTokenGenerationInitializeResponse
     */
    required?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RootTokenGenerationInitializeResponse
     */
    started?: boolean;
}

/**
 * Check if a given object implements the RootTokenGenerationInitializeResponse interface.
 */
export function instanceOfRootTokenGenerationInitializeResponse(value: object): value is RootTokenGenerationInitializeResponse {
    return true;
}

export function RootTokenGenerationInitializeResponseFromJSON(json: any): RootTokenGenerationInitializeResponse {
    return RootTokenGenerationInitializeResponseFromJSONTyped(json, false);
}

export function RootTokenGenerationInitializeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RootTokenGenerationInitializeResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'complete': json['complete'] == null ? undefined : json['complete'],
        'encodedRootToken': json['encoded_root_token'] == null ? undefined : json['encoded_root_token'],
        'encodedToken': json['encoded_token'] == null ? undefined : json['encoded_token'],
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
        'otp': json['otp'] == null ? undefined : json['otp'],
        'otpLength': json['otp_length'] == null ? undefined : json['otp_length'],
        'pgpFingerprint': json['pgp_fingerprint'] == null ? undefined : json['pgp_fingerprint'],
        'progress': json['progress'] == null ? undefined : json['progress'],
        'required': json['required'] == null ? undefined : json['required'],
        'started': json['started'] == null ? undefined : json['started'],
    };
}

export function RootTokenGenerationInitializeResponseToJSON(json: any): RootTokenGenerationInitializeResponse {
    return RootTokenGenerationInitializeResponseToJSONTyped(json, false);
}

export function RootTokenGenerationInitializeResponseToJSONTyped(value?: RootTokenGenerationInitializeResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'complete': value['complete'],
        'encoded_root_token': value['encodedRootToken'],
        'encoded_token': value['encodedToken'],
        'nonce': value['nonce'],
        'otp': value['otp'],
        'otp_length': value['otpLength'],
        'pgp_fingerprint': value['pgpFingerprint'],
        'progress': value['progress'],
        'required': value['required'],
        'started': value['started'],
    };
}

