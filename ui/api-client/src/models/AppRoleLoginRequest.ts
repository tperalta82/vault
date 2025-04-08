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
 * @interface AppRoleLoginRequest
 */
export interface AppRoleLoginRequest {
    /**
     * Unique identifier of the Role. Required to be supplied when the 'bind_secret_id' constraint is set.
     * @type {string}
     * @memberof AppRoleLoginRequest
     */
    roleId?: string;
    /**
     * SecretID belong to the App role
     * @type {string}
     * @memberof AppRoleLoginRequest
     */
    secretId?: string;
}

/**
 * Check if a given object implements the AppRoleLoginRequest interface.
 */
export function instanceOfAppRoleLoginRequest(value: object): value is AppRoleLoginRequest {
    return true;
}

export function AppRoleLoginRequestFromJSON(json: any): AppRoleLoginRequest {
    return AppRoleLoginRequestFromJSONTyped(json, false);
}

export function AppRoleLoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRoleLoginRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'roleId': json['role_id'] == null ? undefined : json['role_id'],
        'secretId': json['secret_id'] == null ? undefined : json['secret_id'],
    };
}

export function AppRoleLoginRequestToJSON(json: any): AppRoleLoginRequest {
    return AppRoleLoginRequestToJSONTyped(json, false);
}

export function AppRoleLoginRequestToJSONTyped(value?: AppRoleLoginRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'role_id': value['roleId'],
        'secret_id': value['secretId'],
    };
}

