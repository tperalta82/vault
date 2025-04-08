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
 * @interface PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequest
 */
export interface PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequest
     */
    signature?: string;
}

/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequest interface.
 */
export function instanceOfPkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequest(value: object): value is PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequest {
    return true;
}

export function PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequestFromJSON(json: any): PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequest {
    return PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequestFromJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'payload': json['payload'] == null ? undefined : json['payload'],
        '_protected': json['protected'] == null ? undefined : json['protected'],
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}

export function PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequestToJSON(json: any): PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequest {
    return PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequestToJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequestToJSONTyped(value?: PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'payload': value['payload'],
        'protected': value['_protected'],
        'signature': value['signature'],
    };
}

