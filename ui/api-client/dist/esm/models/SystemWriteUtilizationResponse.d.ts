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
 * @interface SystemWriteUtilizationResponse
 */
export interface SystemWriteUtilizationResponse {
    /**
     * JSON serialized manual license reporting encoded in base64
     * @type {string}
     * @memberof SystemWriteUtilizationResponse
     */
    utilizationBundle?: string;
}
/**
 * Check if a given object implements the SystemWriteUtilizationResponse interface.
 */
export declare function instanceOfSystemWriteUtilizationResponse(value: object): value is SystemWriteUtilizationResponse;
export declare function SystemWriteUtilizationResponseFromJSON(json: any): SystemWriteUtilizationResponse;
export declare function SystemWriteUtilizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteUtilizationResponse;
export declare function SystemWriteUtilizationResponseToJSON(json: any): SystemWriteUtilizationResponse;
export declare function SystemWriteUtilizationResponseToJSONTyped(value?: SystemWriteUtilizationResponse | null, ignoreDiscriminator?: boolean): any;
