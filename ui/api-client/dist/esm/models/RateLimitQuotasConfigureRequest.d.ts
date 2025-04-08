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
 * @interface RateLimitQuotasConfigureRequest
 */
export interface RateLimitQuotasConfigureRequest {
    /**
     * Specifies the list of exempt global paths from all rate limit quotas. If empty no global paths will be exempt.
     * @type {Array<string>}
     * @memberof RateLimitQuotasConfigureRequest
     */
    absoluteRateLimitExemptPaths?: Array<string>;
    /**
     * If set, starts audit logging of requests that get rejected due to rate limit quota rule violations.
     * @type {boolean}
     * @memberof RateLimitQuotasConfigureRequest
     */
    enableRateLimitAuditLogging?: boolean;
    /**
     * If set, additional rate limit quota HTTP headers will be added to responses.
     * @type {boolean}
     * @memberof RateLimitQuotasConfigureRequest
     */
    enableRateLimitResponseHeaders?: boolean;
    /**
     * Specifies the list of exempt paths from all rate limit quotas. If empty no paths will be exempt.
     * @type {Array<string>}
     * @memberof RateLimitQuotasConfigureRequest
     */
    rateLimitExemptPaths?: Array<string>;
}
/**
 * Check if a given object implements the RateLimitQuotasConfigureRequest interface.
 */
export declare function instanceOfRateLimitQuotasConfigureRequest(value: object): value is RateLimitQuotasConfigureRequest;
export declare function RateLimitQuotasConfigureRequestFromJSON(json: any): RateLimitQuotasConfigureRequest;
export declare function RateLimitQuotasConfigureRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateLimitQuotasConfigureRequest;
export declare function RateLimitQuotasConfigureRequestToJSON(json: any): RateLimitQuotasConfigureRequest;
export declare function RateLimitQuotasConfigureRequestToJSONTyped(value?: RateLimitQuotasConfigureRequest | null, ignoreDiscriminator?: boolean): any;
