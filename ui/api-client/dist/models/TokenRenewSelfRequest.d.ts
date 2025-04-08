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
 * @interface TokenRenewSelfRequest
 */
export interface TokenRenewSelfRequest {
    /**
     * The desired increment in seconds to the token expiration
     * @type {string}
     * @memberof TokenRenewSelfRequest
     */
    increment?: string;
    /**
     * Token to renew (unused, does not need to be set)
     * @type {string}
     * @memberof TokenRenewSelfRequest
     */
    token?: string;
}
/**
 * Check if a given object implements the TokenRenewSelfRequest interface.
 */
export declare function instanceOfTokenRenewSelfRequest(value: object): value is TokenRenewSelfRequest;
export declare function TokenRenewSelfRequestFromJSON(json: any): TokenRenewSelfRequest;
export declare function TokenRenewSelfRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenRenewSelfRequest;
export declare function TokenRenewSelfRequestToJSON(json: any): TokenRenewSelfRequest;
export declare function TokenRenewSelfRequestToJSONTyped(value?: TokenRenewSelfRequest | null, ignoreDiscriminator?: boolean): any;
