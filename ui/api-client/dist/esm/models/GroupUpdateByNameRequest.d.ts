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
 * @interface GroupUpdateByNameRequest
 */
export interface GroupUpdateByNameRequest {
    /**
     * ID of the group. If set, updates the corresponding existing group.
     * @type {string}
     * @memberof GroupUpdateByNameRequest
     */
    id?: string;
    /**
     * Entity IDs to be assigned as group members.
     * @type {Array<string>}
     * @memberof GroupUpdateByNameRequest
     */
    memberEntityIds?: Array<string>;
    /**
     * Group IDs to be assigned as group members.
     * @type {Array<string>}
     * @memberof GroupUpdateByNameRequest
     */
    memberGroupIds?: Array<string>;
    /**
     * Metadata to be associated with the group. In CLI, this parameter can be repeated multiple times, and it all gets merged together. For example: vault <command> <path> metadata=key1=value1 metadata=key2=value2
     * @type {object}
     * @memberof GroupUpdateByNameRequest
     */
    metadata?: object;
    /**
     * Policies to be tied to the group.
     * @type {Array<string>}
     * @memberof GroupUpdateByNameRequest
     */
    policies?: Array<string>;
    /**
     * Type of the group, 'internal' or 'external'. Defaults to 'internal'
     * @type {string}
     * @memberof GroupUpdateByNameRequest
     */
    type?: string;
}
/**
 * Check if a given object implements the GroupUpdateByNameRequest interface.
 */
export declare function instanceOfGroupUpdateByNameRequest(value: object): value is GroupUpdateByNameRequest;
export declare function GroupUpdateByNameRequestFromJSON(json: any): GroupUpdateByNameRequest;
export declare function GroupUpdateByNameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupUpdateByNameRequest;
export declare function GroupUpdateByNameRequestToJSON(json: any): GroupUpdateByNameRequest;
export declare function GroupUpdateByNameRequestToJSONTyped(value?: GroupUpdateByNameRequest | null, ignoreDiscriminator?: boolean): any;
