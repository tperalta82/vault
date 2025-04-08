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
 * @interface PkiRotateDeltaCrlResponse
 */
export interface PkiRotateDeltaCrlResponse {
    /**
     * Whether rotation was successful
     * @type {boolean}
     * @memberof PkiRotateDeltaCrlResponse
     */
    success?: boolean;
}
/**
 * Check if a given object implements the PkiRotateDeltaCrlResponse interface.
 */
export declare function instanceOfPkiRotateDeltaCrlResponse(value: object): value is PkiRotateDeltaCrlResponse;
export declare function PkiRotateDeltaCrlResponseFromJSON(json: any): PkiRotateDeltaCrlResponse;
export declare function PkiRotateDeltaCrlResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiRotateDeltaCrlResponse;
export declare function PkiRotateDeltaCrlResponseToJSON(json: any): PkiRotateDeltaCrlResponse;
export declare function PkiRotateDeltaCrlResponseToJSONTyped(value?: PkiRotateDeltaCrlResponse | null, ignoreDiscriminator?: boolean): any;
