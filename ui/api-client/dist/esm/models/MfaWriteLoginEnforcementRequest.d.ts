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
 * @interface MfaWriteLoginEnforcementRequest
 */
export interface MfaWriteLoginEnforcementRequest {
    /**
     * Array of auth mount accessor IDs
     * @type {Array<string>}
     * @memberof MfaWriteLoginEnforcementRequest
     */
    authMethodAccessors?: Array<string>;
    /**
     * Array of auth mount types
     * @type {Array<string>}
     * @memberof MfaWriteLoginEnforcementRequest
     */
    authMethodTypes?: Array<string>;
    /**
     * Array of identity entity IDs
     * @type {Array<string>}
     * @memberof MfaWriteLoginEnforcementRequest
     */
    identityEntityIds?: Array<string>;
    /**
     * Array of identity group IDs
     * @type {Array<string>}
     * @memberof MfaWriteLoginEnforcementRequest
     */
    identityGroupIds?: Array<string>;
    /**
     * Array of Method IDs that determine what methods will be enforced
     * @type {Array<string>}
     * @memberof MfaWriteLoginEnforcementRequest
     */
    mfaMethodIds: Array<string>;
}
/**
 * Check if a given object implements the MfaWriteLoginEnforcementRequest interface.
 */
export declare function instanceOfMfaWriteLoginEnforcementRequest(value: object): value is MfaWriteLoginEnforcementRequest;
export declare function MfaWriteLoginEnforcementRequestFromJSON(json: any): MfaWriteLoginEnforcementRequest;
export declare function MfaWriteLoginEnforcementRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MfaWriteLoginEnforcementRequest;
export declare function MfaWriteLoginEnforcementRequestToJSON(json: any): MfaWriteLoginEnforcementRequest;
export declare function MfaWriteLoginEnforcementRequestToJSONTyped(value?: MfaWriteLoginEnforcementRequest | null, ignoreDiscriminator?: boolean): any;
