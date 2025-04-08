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
 * @interface TransitCreateKeyRequest
 */
export interface TransitCreateKeyRequest {
    /**
     * Enables taking a backup of the named key in plaintext format. Once set, this cannot be disabled.
     * @type {boolean}
     * @memberof TransitCreateKeyRequest
     */
    allowPlaintextBackup?: boolean;
    /**
     * Amount of time the key should live before being automatically rotated. A value of 0 (default) disables automatic rotation for the key.
     * @type {string}
     * @memberof TransitCreateKeyRequest
     */
    autoRotatePeriod?: string;
    /**
     * Base64 encoded context for key derivation. When reading a key with key derivation enabled, if the key type supports public keys, this will return the public key for the given context.
     * @type {string}
     * @memberof TransitCreateKeyRequest
     */
    context?: string;
    /**
     * Whether to support convergent encryption. This is only supported when using a key with key derivation enabled and will require all requests to carry both a context and 96-bit (12-byte) nonce. The given nonce will be used in place of a randomly generated nonce. As a result, when the same context and nonce are supplied, the same ciphertext is generated. It is *very important* when using this mode that you ensure that all nonces are unique for a given context. Failing to do so will severely impact the ciphertext's security.
     * @type {boolean}
     * @memberof TransitCreateKeyRequest
     */
    convergentEncryption?: boolean;
    /**
     * Enables key derivation mode. This allows for per-transaction unique keys for encryption operations.
     * @type {boolean}
     * @memberof TransitCreateKeyRequest
     */
    derived?: boolean;
    /**
     * Enables keys to be exportable. This allows for all the valid keys in the key ring to be exported.
     * @type {boolean}
     * @memberof TransitCreateKeyRequest
     */
    exportable?: boolean;
    /**
     * The key type of the elliptic curve key to use for hybrid signature schemes. Supported types are: ecdsa-p256, ecdsa-p384, ecdsa-p521, and ed25519.
     * @type {string}
     * @memberof TransitCreateKeyRequest
     */
    hybridKeyTypeEc?: string;
    /**
     * The key type of the post-quantum key to use for hybrid signature schemes. Supported types are: ML-DSA.
     * @type {string}
     * @memberof TransitCreateKeyRequest
     */
    hybridKeyTypePqc?: string;
    /**
     * The key size in bytes for the algorithm. Only applies to HMAC and must be no fewer than 32 bytes and no more than 512
     * @type {number}
     * @memberof TransitCreateKeyRequest
     */
    keySize?: number;
    /**
     * The UUID of the managed key to use for this transit key
     * @type {string}
     * @memberof TransitCreateKeyRequest
     */
    managedKeyId?: string;
    /**
     * The name of the managed key to use for this transit key
     * @type {string}
     * @memberof TransitCreateKeyRequest
     */
    managedKeyName?: string;
    /**
     * The parameter set to use. Applies to ML-DSA and SLH-DSA key types. For ML-DSA key types, valid values are 44, 65, or 87.
     * @type {string}
     * @memberof TransitCreateKeyRequest
     */
    parameterSet?: string;
    /**
     * The type of key to create. Currently, "aes128-gcm96" (symmetric), "aes256-gcm96" (symmetric), "ecdsa-p256" (asymmetric), "ecdsa-p384" (asymmetric), "ecdsa-p521" (asymmetric), "ed25519" (asymmetric), "rsa-2048" (asymmetric), "rsa-3072" (asymmetric), "rsa-4096" (asymmetric), "ml-dsa" (asymmetric) are supported. Defaults to "aes256-gcm96".
     * @type {string}
     * @memberof TransitCreateKeyRequest
     */
    type?: string;
}
/**
 * Check if a given object implements the TransitCreateKeyRequest interface.
 */
export declare function instanceOfTransitCreateKeyRequest(value: object): value is TransitCreateKeyRequest;
export declare function TransitCreateKeyRequestFromJSON(json: any): TransitCreateKeyRequest;
export declare function TransitCreateKeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransitCreateKeyRequest;
export declare function TransitCreateKeyRequestToJSON(json: any): TransitCreateKeyRequest;
export declare function TransitCreateKeyRequestToJSONTyped(value?: TransitCreateKeyRequest | null, ignoreDiscriminator?: boolean): any;
