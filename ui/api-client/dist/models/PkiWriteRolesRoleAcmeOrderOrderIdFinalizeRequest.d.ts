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
 * @interface PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequest
 */
export interface PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequest
     */
    signature?: string;
}
/**
 * Check if a given object implements the PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequest interface.
 */
export declare function instanceOfPkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequest(value: object): value is PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequest;
export declare function PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequestFromJSON(json: any): PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequest;
export declare function PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequest;
export declare function PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequestToJSON(json: any): PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequest;
export declare function PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequestToJSONTyped(value?: PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequest | null, ignoreDiscriminator?: boolean): any;
