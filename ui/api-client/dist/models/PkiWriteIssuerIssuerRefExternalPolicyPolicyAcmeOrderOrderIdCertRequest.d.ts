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
/**
 *
 * @export
 * @interface PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrderOrderIdCertRequest
 */
export interface PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrderOrderIdCertRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrderOrderIdCertRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrderOrderIdCertRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrderOrderIdCertRequest
     */
    signature?: string;
}
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrderOrderIdCertRequest interface.
 */
export declare function instanceOfPkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrderOrderIdCertRequest(value: object): value is PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrderOrderIdCertRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrderOrderIdCertRequestFromJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrderOrderIdCertRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrderOrderIdCertRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrderOrderIdCertRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrderOrderIdCertRequestToJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrderOrderIdCertRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrderOrderIdCertRequestToJSONTyped(value?: PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrderOrderIdCertRequest | null, ignoreDiscriminator?: boolean): any;
