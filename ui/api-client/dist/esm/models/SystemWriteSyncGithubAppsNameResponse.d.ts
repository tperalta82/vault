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
 * @interface SystemWriteSyncGithubAppsNameResponse
 */
export interface SystemWriteSyncGithubAppsNameResponse {
    /**
     * Application ID of the GitHub App.
     * @type {number}
     * @memberof SystemWriteSyncGithubAppsNameResponse
     */
    appId?: number;
    /**
     * The name of the GitHub app. Used to identify the application when configuring the GitHub destination
     * @type {string}
     * @memberof SystemWriteSyncGithubAppsNameResponse
     */
    name?: string;
}
/**
 * Check if a given object implements the SystemWriteSyncGithubAppsNameResponse interface.
 */
export declare function instanceOfSystemWriteSyncGithubAppsNameResponse(value: object): value is SystemWriteSyncGithubAppsNameResponse;
export declare function SystemWriteSyncGithubAppsNameResponseFromJSON(json: any): SystemWriteSyncGithubAppsNameResponse;
export declare function SystemWriteSyncGithubAppsNameResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteSyncGithubAppsNameResponse;
export declare function SystemWriteSyncGithubAppsNameResponseToJSON(json: any): SystemWriteSyncGithubAppsNameResponse;
export declare function SystemWriteSyncGithubAppsNameResponseToJSONTyped(value?: SystemWriteSyncGithubAppsNameResponse | null, ignoreDiscriminator?: boolean): any;
