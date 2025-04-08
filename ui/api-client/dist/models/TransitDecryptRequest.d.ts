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
 * @interface TransitDecryptRequest
 */
export interface TransitDecryptRequest {
    /**
     * When using an AEAD cipher mode, such as AES-GCM, this parameter allows passing associated data (AD/AAD) into the encryption function; this data must be passed on subsequent decryption requests but can be transited in plaintext. On successful decryption, both the ciphertext and the associated data are attested not to have been tampered with.
     * @type {string}
     * @memberof TransitDecryptRequest
     */
    associatedData?: string;
    /**
     * Specifies a list of items to be decrypted in a single batch. When this parameter is set, if the parameters 'ciphertext', 'context' and 'nonce' are also set, they will be ignored. Any batch output will preserve the order of the batch input.
     * @type {Array<object>}
     * @memberof TransitDecryptRequest
     */
    batchInput?: Array<object>;
    /**
     * The ciphertext to decrypt, provided as returned by encrypt.
     * @type {string}
     * @memberof TransitDecryptRequest
     */
    ciphertext?: string;
    /**
     * Base64 encoded context for key derivation. Required if key derivation is enabled.
     * @type {string}
     * @memberof TransitDecryptRequest
     */
    context?: string;
    /**
     * Base64 encoded nonce value used during encryption. Must be provided if convergent encryption is enabled for this key and the key was generated with Vault 0.6.1. Not required for keys created in 0.6.2+.
     * @type {string}
     * @memberof TransitDecryptRequest
     */
    nonce?: string;
    /**
     * The padding scheme to use for decrypt. Currently only applies to RSA key types. Options are 'oaep' or 'pkcs1v15'. Defaults to 'oaep'
     * @type {string}
     * @memberof TransitDecryptRequest
     */
    paddingScheme?: string;
    /**
     * Ordinarily, if a batch item fails to decrypt due to a bad input, but other batch items succeed, the HTTP response code is 400 (Bad Request). Some applications may want to treat partial failures differently. Providing the parameter returns the given response code integer instead of a 400 in this case. If all values fail HTTP 400 is still returned.
     * @type {number}
     * @memberof TransitDecryptRequest
     */
    partialFailureResponseCode?: number;
}
/**
 * Check if a given object implements the TransitDecryptRequest interface.
 */
export declare function instanceOfTransitDecryptRequest(value: object): value is TransitDecryptRequest;
export declare function TransitDecryptRequestFromJSON(json: any): TransitDecryptRequest;
export declare function TransitDecryptRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransitDecryptRequest;
export declare function TransitDecryptRequestToJSON(json: any): TransitDecryptRequest;
export declare function TransitDecryptRequestToJSONTyped(value?: TransitDecryptRequest | null, ignoreDiscriminator?: boolean): any;
