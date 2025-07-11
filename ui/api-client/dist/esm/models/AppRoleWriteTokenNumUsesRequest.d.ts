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
 * @interface AppRoleWriteTokenNumUsesRequest
 */
export interface AppRoleWriteTokenNumUsesRequest {
    /**
     * The maximum number of times a token may be used, a value of zero means unlimited
     * @type {number}
     * @memberof AppRoleWriteTokenNumUsesRequest
     */
    tokenNumUses?: number;
}
/**
 * Check if a given object implements the AppRoleWriteTokenNumUsesRequest interface.
 */
export declare function instanceOfAppRoleWriteTokenNumUsesRequest(value: object): value is AppRoleWriteTokenNumUsesRequest;
export declare function AppRoleWriteTokenNumUsesRequestFromJSON(json: any): AppRoleWriteTokenNumUsesRequest;
export declare function AppRoleWriteTokenNumUsesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRoleWriteTokenNumUsesRequest;
export declare function AppRoleWriteTokenNumUsesRequestToJSON(json: any): AppRoleWriteTokenNumUsesRequest;
export declare function AppRoleWriteTokenNumUsesRequestToJSONTyped(value?: AppRoleWriteTokenNumUsesRequest | null, ignoreDiscriminator?: boolean): any;
