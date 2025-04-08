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
 * @interface PkiIssuerSignWithRoleResponse
 */
export interface PkiIssuerSignWithRoleResponse {
    /**
     * Certificate Chain
     * @type {Array<string>}
     * @memberof PkiIssuerSignWithRoleResponse
     */
    caChain?: Array<string>;
    /**
     * Certificate
     * @type {string}
     * @memberof PkiIssuerSignWithRoleResponse
     */
    certificate?: string;
    /**
     * Time of expiration
     * @type {number}
     * @memberof PkiIssuerSignWithRoleResponse
     */
    expiration?: number;
    /**
     * Issuing Certificate Authority
     * @type {string}
     * @memberof PkiIssuerSignWithRoleResponse
     */
    issuingCa?: string;
    /**
     * Serial Number
     * @type {string}
     * @memberof PkiIssuerSignWithRoleResponse
     */
    serialNumber?: string;
}
/**
 * Check if a given object implements the PkiIssuerSignWithRoleResponse interface.
 */
export declare function instanceOfPkiIssuerSignWithRoleResponse(value: object): value is PkiIssuerSignWithRoleResponse;
export declare function PkiIssuerSignWithRoleResponseFromJSON(json: any): PkiIssuerSignWithRoleResponse;
export declare function PkiIssuerSignWithRoleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiIssuerSignWithRoleResponse;
export declare function PkiIssuerSignWithRoleResponseToJSON(json: any): PkiIssuerSignWithRoleResponse;
export declare function PkiIssuerSignWithRoleResponseToJSONTyped(value?: PkiIssuerSignWithRoleResponse | null, ignoreDiscriminator?: boolean): any;
