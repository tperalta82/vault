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
 * @interface PkiListEabKeysResponse
 */
export interface PkiListEabKeysResponse {
    /**
     * EAB details keyed by the eab key id
     * @type {object}
     * @memberof PkiListEabKeysResponse
     */
    keyInfo?: object;
    /**
     * A list of unused eab keys
     * @type {Array<string>}
     * @memberof PkiListEabKeysResponse
     */
    keys?: Array<string>;
}
/**
 * Check if a given object implements the PkiListEabKeysResponse interface.
 */
export declare function instanceOfPkiListEabKeysResponse(value: object): value is PkiListEabKeysResponse;
export declare function PkiListEabKeysResponseFromJSON(json: any): PkiListEabKeysResponse;
export declare function PkiListEabKeysResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiListEabKeysResponse;
export declare function PkiListEabKeysResponseToJSON(json: any): PkiListEabKeysResponse;
export declare function PkiListEabKeysResponseToJSONTyped(value?: PkiListEabKeysResponse | null, ignoreDiscriminator?: boolean): any;
