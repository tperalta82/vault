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
 * @interface LdapLibraryForceCheckInRequest
 */
export interface LdapLibraryForceCheckInRequest {
    /**
     * The username/logon name for the service accounts to check in.
     * @type {Array<string>}
     * @memberof LdapLibraryForceCheckInRequest
     */
    serviceAccountNames?: Array<string>;
}
/**
 * Check if a given object implements the LdapLibraryForceCheckInRequest interface.
 */
export declare function instanceOfLdapLibraryForceCheckInRequest(value: object): value is LdapLibraryForceCheckInRequest;
export declare function LdapLibraryForceCheckInRequestFromJSON(json: any): LdapLibraryForceCheckInRequest;
export declare function LdapLibraryForceCheckInRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LdapLibraryForceCheckInRequest;
export declare function LdapLibraryForceCheckInRequestToJSON(json: any): LdapLibraryForceCheckInRequest;
export declare function LdapLibraryForceCheckInRequestToJSONTyped(value?: LdapLibraryForceCheckInRequest | null, ignoreDiscriminator?: boolean): any;
