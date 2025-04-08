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
 * @interface PkiWriteRolesRoleAcmeNewOrderRequest
 */
export interface PkiWriteRolesRoleAcmeNewOrderRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteRolesRoleAcmeNewOrderRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteRolesRoleAcmeNewOrderRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteRolesRoleAcmeNewOrderRequest
     */
    signature?: string;
}

/**
 * Check if a given object implements the PkiWriteRolesRoleAcmeNewOrderRequest interface.
 */
export function instanceOfPkiWriteRolesRoleAcmeNewOrderRequest(value: object): value is PkiWriteRolesRoleAcmeNewOrderRequest {
    return true;
}

export function PkiWriteRolesRoleAcmeNewOrderRequestFromJSON(json: any): PkiWriteRolesRoleAcmeNewOrderRequest {
    return PkiWriteRolesRoleAcmeNewOrderRequestFromJSONTyped(json, false);
}

export function PkiWriteRolesRoleAcmeNewOrderRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteRolesRoleAcmeNewOrderRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'payload': json['payload'] == null ? undefined : json['payload'],
        '_protected': json['protected'] == null ? undefined : json['protected'],
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}

export function PkiWriteRolesRoleAcmeNewOrderRequestToJSON(json: any): PkiWriteRolesRoleAcmeNewOrderRequest {
    return PkiWriteRolesRoleAcmeNewOrderRequestToJSONTyped(json, false);
}

export function PkiWriteRolesRoleAcmeNewOrderRequestToJSONTyped(value?: PkiWriteRolesRoleAcmeNewOrderRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'payload': value['payload'],
        'protected': value['_protected'],
        'signature': value['signature'],
    };
}

