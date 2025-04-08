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
 * @interface SystemWriteReplicationDrSecondaryUpdatePrimaryRequest
 */
export interface SystemWriteReplicationDrSecondaryUpdatePrimaryRequest {
    /**
     * A path to a file containing a PEM-encoded CA certificate to verify the call against the primary's API address
     * @type {string}
     * @memberof SystemWriteReplicationDrSecondaryUpdatePrimaryRequest
     */
    caFile?: string;
    /**
     * A path to a directory containing PEM-encoded CA certificates to verify the call against the primary's API address
     * @type {string}
     * @memberof SystemWriteReplicationDrSecondaryUpdatePrimaryRequest
     */
    caPath?: string;
    /**
     * The client certificate to use for authentication, in PEM format. Note: client authentication for this operation will always use TLS 1.2 or higher.
     * @type {string}
     * @memberof SystemWriteReplicationDrSecondaryUpdatePrimaryRequest
     */
    clientCertPem?: string;
    /**
     * The client key to use for authentication, in PEM format.
     * @type {string}
     * @memberof SystemWriteReplicationDrSecondaryUpdatePrimaryRequest
     */
    clientKeyPem?: string;
    /**
     * DR operation token used to authorize this request.
     * @type {string}
     * @memberof SystemWriteReplicationDrSecondaryUpdatePrimaryRequest
     */
    drOperationToken?: string;
    /**
     * The API address of the primary. If not set, the value the primary supplies in the token will be used, which is the primary's redirect address.
     * @type {string}
     * @memberof SystemWriteReplicationDrSecondaryUpdatePrimaryRequest
     */
    primaryApiAddr?: string;
    /**
     * The token given by the primary to activate secondary status for this cluster.
     * @type {string}
     * @memberof SystemWriteReplicationDrSecondaryUpdatePrimaryRequest
     */
    token?: string;
    /**
     * A comma separated list of host:port strings to serve as new addresses for the primary cluster
     * @type {Array<string>}
     * @memberof SystemWriteReplicationDrSecondaryUpdatePrimaryRequest
     */
    updatePrimaryAddrs?: Array<string>;
}

/**
 * Check if a given object implements the SystemWriteReplicationDrSecondaryUpdatePrimaryRequest interface.
 */
export function instanceOfSystemWriteReplicationDrSecondaryUpdatePrimaryRequest(value: object): value is SystemWriteReplicationDrSecondaryUpdatePrimaryRequest {
    return true;
}

export function SystemWriteReplicationDrSecondaryUpdatePrimaryRequestFromJSON(json: any): SystemWriteReplicationDrSecondaryUpdatePrimaryRequest {
    return SystemWriteReplicationDrSecondaryUpdatePrimaryRequestFromJSONTyped(json, false);
}

export function SystemWriteReplicationDrSecondaryUpdatePrimaryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteReplicationDrSecondaryUpdatePrimaryRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'caFile': json['ca_file'] == null ? undefined : json['ca_file'],
        'caPath': json['ca_path'] == null ? undefined : json['ca_path'],
        'clientCertPem': json['client_cert_pem'] == null ? undefined : json['client_cert_pem'],
        'clientKeyPem': json['client_key_pem'] == null ? undefined : json['client_key_pem'],
        'drOperationToken': json['dr_operation_token'] == null ? undefined : json['dr_operation_token'],
        'primaryApiAddr': json['primary_api_addr'] == null ? undefined : json['primary_api_addr'],
        'token': json['token'] == null ? undefined : json['token'],
        'updatePrimaryAddrs': json['update_primary_addrs'] == null ? undefined : json['update_primary_addrs'],
    };
}

export function SystemWriteReplicationDrSecondaryUpdatePrimaryRequestToJSON(json: any): SystemWriteReplicationDrSecondaryUpdatePrimaryRequest {
    return SystemWriteReplicationDrSecondaryUpdatePrimaryRequestToJSONTyped(json, false);
}

export function SystemWriteReplicationDrSecondaryUpdatePrimaryRequestToJSONTyped(value?: SystemWriteReplicationDrSecondaryUpdatePrimaryRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ca_file': value['caFile'],
        'ca_path': value['caPath'],
        'client_cert_pem': value['clientCertPem'],
        'client_key_pem': value['clientKeyPem'],
        'dr_operation_token': value['drOperationToken'],
        'primary_api_addr': value['primaryApiAddr'],
        'token': value['token'],
        'update_primary_addrs': value['updatePrimaryAddrs'],
    };
}

