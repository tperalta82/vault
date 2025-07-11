/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.21.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface PkiWriteExternalPolicyIssuePolicyResponse
 */
export interface PkiWriteExternalPolicyIssuePolicyResponse {
    /**
     * Certificate Chain
     * @type {Array<string>}
     * @memberof PkiWriteExternalPolicyIssuePolicyResponse
     */
    caChain?: Array<string>;
    /**
     * Certificate
     * @type {string}
     * @memberof PkiWriteExternalPolicyIssuePolicyResponse
     */
    certificate?: string;
    /**
     * Time of expiration
     * @type {number}
     * @memberof PkiWriteExternalPolicyIssuePolicyResponse
     */
    expiration?: number;
    /**
     * Issuing Certificate Authority
     * @type {string}
     * @memberof PkiWriteExternalPolicyIssuePolicyResponse
     */
    issuingCa?: string;
    /**
     * Private key
     * @type {string}
     * @memberof PkiWriteExternalPolicyIssuePolicyResponse
     */
    privateKey?: string;
    /**
     * Private key type
     * @type {string}
     * @memberof PkiWriteExternalPolicyIssuePolicyResponse
     */
    privateKeyType?: string;
    /**
     * Serial Number
     * @type {string}
     * @memberof PkiWriteExternalPolicyIssuePolicyResponse
     */
    serialNumber?: string;
}
/**
 * Check if a given object implements the PkiWriteExternalPolicyIssuePolicyResponse interface.
 */
export declare function instanceOfPkiWriteExternalPolicyIssuePolicyResponse(value: object): value is PkiWriteExternalPolicyIssuePolicyResponse;
export declare function PkiWriteExternalPolicyIssuePolicyResponseFromJSON(json: any): PkiWriteExternalPolicyIssuePolicyResponse;
export declare function PkiWriteExternalPolicyIssuePolicyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteExternalPolicyIssuePolicyResponse;
export declare function PkiWriteExternalPolicyIssuePolicyResponseToJSON(json: any): PkiWriteExternalPolicyIssuePolicyResponse;
export declare function PkiWriteExternalPolicyIssuePolicyResponseToJSONTyped(value?: PkiWriteExternalPolicyIssuePolicyResponse | null, ignoreDiscriminator?: boolean): any;
