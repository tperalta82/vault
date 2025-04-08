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
 * @interface UserpassUpdatePoliciesRequest
 */
export interface UserpassUpdatePoliciesRequest {
    /**
     * Use "token_policies" instead. If this and "token_policies" are both specified, only "token_policies" will be used.
     * @type {Array<string>}
     * @memberof UserpassUpdatePoliciesRequest
     * @deprecated
     */
    policies?: Array<string>;
    /**
     * Comma-separated list of policies
     * @type {Array<string>}
     * @memberof UserpassUpdatePoliciesRequest
     */
    tokenPolicies?: Array<string>;
}
/**
 * Check if a given object implements the UserpassUpdatePoliciesRequest interface.
 */
export declare function instanceOfUserpassUpdatePoliciesRequest(value: object): value is UserpassUpdatePoliciesRequest;
export declare function UserpassUpdatePoliciesRequestFromJSON(json: any): UserpassUpdatePoliciesRequest;
export declare function UserpassUpdatePoliciesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserpassUpdatePoliciesRequest;
export declare function UserpassUpdatePoliciesRequestToJSON(json: any): UserpassUpdatePoliciesRequest;
export declare function UserpassUpdatePoliciesRequestToJSONTyped(value?: UserpassUpdatePoliciesRequest | null, ignoreDiscriminator?: boolean): any;
