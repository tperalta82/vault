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
 * @interface PkiGenerateExportedKeyResponse
 */
export interface PkiGenerateExportedKeyResponse {
    /**
     * ID assigned to this key.
     * @type {string}
     * @memberof PkiGenerateExportedKeyResponse
     */
    keyId?: string;
    /**
     * Name assigned to this key.
     * @type {string}
     * @memberof PkiGenerateExportedKeyResponse
     */
    keyName?: string;
    /**
     * The type of key to use; defaults to RSA. "rsa" "ec" and "ed25519" are the only valid values.
     * @type {string}
     * @memberof PkiGenerateExportedKeyResponse
     */
    keyType?: string;
    /**
     * The private key string
     * @type {string}
     * @memberof PkiGenerateExportedKeyResponse
     */
    privateKey?: string;
}
/**
 * Check if a given object implements the PkiGenerateExportedKeyResponse interface.
 */
export declare function instanceOfPkiGenerateExportedKeyResponse(value: object): value is PkiGenerateExportedKeyResponse;
export declare function PkiGenerateExportedKeyResponseFromJSON(json: any): PkiGenerateExportedKeyResponse;
export declare function PkiGenerateExportedKeyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiGenerateExportedKeyResponse;
export declare function PkiGenerateExportedKeyResponseToJSON(json: any): PkiGenerateExportedKeyResponse;
export declare function PkiGenerateExportedKeyResponseToJSONTyped(value?: PkiGenerateExportedKeyResponse | null, ignoreDiscriminator?: boolean): any;
