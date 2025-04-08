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
 * @interface UnwrapRequest
 */
export interface UnwrapRequest {
    /**
     *
     * @type {string}
     * @memberof UnwrapRequest
     */
    token?: string;
}
/**
 * Check if a given object implements the UnwrapRequest interface.
 */
export declare function instanceOfUnwrapRequest(value: object): value is UnwrapRequest;
export declare function UnwrapRequestFromJSON(json: any): UnwrapRequest;
export declare function UnwrapRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnwrapRequest;
export declare function UnwrapRequestToJSON(json: any): UnwrapRequest;
export declare function UnwrapRequestToJSONTyped(value?: UnwrapRequest | null, ignoreDiscriminator?: boolean): any;
