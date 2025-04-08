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
 * @interface KvV2DeleteVersionsRequest
 */
export interface KvV2DeleteVersionsRequest {
    /**
     * The versions to be archived. The versioned data will not be deleted, but it will no longer be returned in normal get requests.
     * @type {Array<number>}
     * @memberof KvV2DeleteVersionsRequest
     */
    versions?: Array<number>;
}
/**
 * Check if a given object implements the KvV2DeleteVersionsRequest interface.
 */
export declare function instanceOfKvV2DeleteVersionsRequest(value: object): value is KvV2DeleteVersionsRequest;
export declare function KvV2DeleteVersionsRequestFromJSON(json: any): KvV2DeleteVersionsRequest;
export declare function KvV2DeleteVersionsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): KvV2DeleteVersionsRequest;
export declare function KvV2DeleteVersionsRequestToJSON(json: any): KvV2DeleteVersionsRequest;
export declare function KvV2DeleteVersionsRequestToJSONTyped(value?: KvV2DeleteVersionsRequest | null, ignoreDiscriminator?: boolean): any;
