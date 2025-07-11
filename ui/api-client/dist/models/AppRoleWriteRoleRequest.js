"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.21.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfAppRoleWriteRoleRequest = instanceOfAppRoleWriteRoleRequest;
exports.AppRoleWriteRoleRequestFromJSON = AppRoleWriteRoleRequestFromJSON;
exports.AppRoleWriteRoleRequestFromJSONTyped = AppRoleWriteRoleRequestFromJSONTyped;
exports.AppRoleWriteRoleRequestToJSON = AppRoleWriteRoleRequestToJSON;
exports.AppRoleWriteRoleRequestToJSONTyped = AppRoleWriteRoleRequestToJSONTyped;
/**
 * Check if a given object implements the AppRoleWriteRoleRequest interface.
 */
function instanceOfAppRoleWriteRoleRequest(value) {
    return true;
}
function AppRoleWriteRoleRequestFromJSON(json) {
    return AppRoleWriteRoleRequestFromJSONTyped(json, false);
}
function AppRoleWriteRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bindSecretId': json['bind_secret_id'] == null ? undefined : json['bind_secret_id'],
        'boundCidrList': json['bound_cidr_list'] == null ? undefined : json['bound_cidr_list'],
        'localSecretIds': json['local_secret_ids'] == null ? undefined : json['local_secret_ids'],
        'period': json['period'] == null ? undefined : json['period'],
        'policies': json['policies'] == null ? undefined : json['policies'],
        'roleId': json['role_id'] == null ? undefined : json['role_id'],
        'secretIdBoundCidrs': json['secret_id_bound_cidrs'] == null ? undefined : json['secret_id_bound_cidrs'],
        'secretIdNumUses': json['secret_id_num_uses'] == null ? undefined : json['secret_id_num_uses'],
        'secretIdTtl': json['secret_id_ttl'] == null ? undefined : json['secret_id_ttl'],
        'tokenBoundCidrs': json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
        'tokenExplicitMaxTtl': json['token_explicit_max_ttl'] == null ? undefined : json['token_explicit_max_ttl'],
        'tokenMaxTtl': json['token_max_ttl'] == null ? undefined : json['token_max_ttl'],
        'tokenNoDefaultPolicy': json['token_no_default_policy'] == null ? undefined : json['token_no_default_policy'],
        'tokenNumUses': json['token_num_uses'] == null ? undefined : json['token_num_uses'],
        'tokenPeriod': json['token_period'] == null ? undefined : json['token_period'],
        'tokenPolicies': json['token_policies'] == null ? undefined : json['token_policies'],
        'tokenTtl': json['token_ttl'] == null ? undefined : json['token_ttl'],
        'tokenType': json['token_type'] == null ? undefined : json['token_type'],
    };
}
function AppRoleWriteRoleRequestToJSON(json) {
    return AppRoleWriteRoleRequestToJSONTyped(json, false);
}
function AppRoleWriteRoleRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'bind_secret_id': value['bindSecretId'],
        'bound_cidr_list': value['boundCidrList'],
        'local_secret_ids': value['localSecretIds'],
        'period': value['period'],
        'policies': value['policies'],
        'role_id': value['roleId'],
        'secret_id_bound_cidrs': value['secretIdBoundCidrs'],
        'secret_id_num_uses': value['secretIdNumUses'],
        'secret_id_ttl': value['secretIdTtl'],
        'token_bound_cidrs': value['tokenBoundCidrs'],
        'token_explicit_max_ttl': value['tokenExplicitMaxTtl'],
        'token_max_ttl': value['tokenMaxTtl'],
        'token_no_default_policy': value['tokenNoDefaultPolicy'],
        'token_num_uses': value['tokenNumUses'],
        'token_period': value['tokenPeriod'],
        'token_policies': value['tokenPolicies'],
        'token_ttl': value['tokenTtl'],
        'token_type': value['tokenType'],
    };
}
