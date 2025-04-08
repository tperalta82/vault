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
 * @interface SystemPatchSyncDestinationsAwsSmNameResponse
 */
export interface SystemPatchSyncDestinationsAwsSmNameResponse {
    /**
     * List of key value pairs of information necessary to connect with the external system.
     * @type {object}
     * @memberof SystemPatchSyncDestinationsAwsSmNameResponse
     */
    connectionDetails?: object;
    /**
     * Name of this secrets store.
     * @type {string}
     * @memberof SystemPatchSyncDestinationsAwsSmNameResponse
     */
    name?: string;
    /**
     * Type of this secrets store.
     * @type {string}
     * @memberof SystemPatchSyncDestinationsAwsSmNameResponse
     */
    type?: string;
}
/**
 * Check if a given object implements the SystemPatchSyncDestinationsAwsSmNameResponse interface.
 */
export declare function instanceOfSystemPatchSyncDestinationsAwsSmNameResponse(value: object): value is SystemPatchSyncDestinationsAwsSmNameResponse;
export declare function SystemPatchSyncDestinationsAwsSmNameResponseFromJSON(json: any): SystemPatchSyncDestinationsAwsSmNameResponse;
export declare function SystemPatchSyncDestinationsAwsSmNameResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemPatchSyncDestinationsAwsSmNameResponse;
export declare function SystemPatchSyncDestinationsAwsSmNameResponseToJSON(json: any): SystemPatchSyncDestinationsAwsSmNameResponse;
export declare function SystemPatchSyncDestinationsAwsSmNameResponseToJSONTyped(value?: SystemPatchSyncDestinationsAwsSmNameResponse | null, ignoreDiscriminator?: boolean): any;
