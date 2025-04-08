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
 * @interface GoogleCloudKmsConfigureKeyRequest
 */
export interface GoogleCloudKmsConfigureKeyRequest {
    /**
     * Maximum allowed crypto key version. If set to a positive value, key versions greater than the given value are not permitted to be used. If set to 0 or a negative value, there is no maximum key version.
     * @type {number}
     * @memberof GoogleCloudKmsConfigureKeyRequest
     */
    maxVersion?: number;
    /**
     * Minimum allowed crypto key version. If set to a positive value, key versions less than the given value are not permitted to be used. If set to 0 or a negative value, there is no minimum key version. This value only affects encryption/re-encryption, not decryption. To restrict old values from being decrypted, increase this value and then perform a trim operation.
     * @type {number}
     * @memberof GoogleCloudKmsConfigureKeyRequest
     */
    minVersion?: number;
}
/**
 * Check if a given object implements the GoogleCloudKmsConfigureKeyRequest interface.
 */
export declare function instanceOfGoogleCloudKmsConfigureKeyRequest(value: object): value is GoogleCloudKmsConfigureKeyRequest;
export declare function GoogleCloudKmsConfigureKeyRequestFromJSON(json: any): GoogleCloudKmsConfigureKeyRequest;
export declare function GoogleCloudKmsConfigureKeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GoogleCloudKmsConfigureKeyRequest;
export declare function GoogleCloudKmsConfigureKeyRequestToJSON(json: any): GoogleCloudKmsConfigureKeyRequest;
export declare function GoogleCloudKmsConfigureKeyRequestToJSONTyped(value?: GoogleCloudKmsConfigureKeyRequest | null, ignoreDiscriminator?: boolean): any;
