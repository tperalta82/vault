"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfSealStatusResponse = instanceOfSealStatusResponse;
exports.SealStatusResponseFromJSON = SealStatusResponseFromJSON;
exports.SealStatusResponseFromJSONTyped = SealStatusResponseFromJSONTyped;
exports.SealStatusResponseToJSON = SealStatusResponseToJSON;
exports.SealStatusResponseToJSONTyped = SealStatusResponseToJSONTyped;
/**
 * Check if a given object implements the SealStatusResponse interface.
 */
function instanceOfSealStatusResponse(value) {
    return true;
}
function SealStatusResponseFromJSON(json) {
    return SealStatusResponseFromJSONTyped(json, false);
}
function SealStatusResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'buildDate': json['build_date'] == null ? undefined : json['build_date'],
        'clusterId': json['cluster_id'] == null ? undefined : json['cluster_id'],
        'clusterName': json['cluster_name'] == null ? undefined : json['cluster_name'],
        'hcpLinkResourceID': json['hcp_link_resource_ID'] == null ? undefined : json['hcp_link_resource_ID'],
        'hcpLinkStatus': json['hcp_link_status'] == null ? undefined : json['hcp_link_status'],
        'initialized': json['initialized'] == null ? undefined : json['initialized'],
        'migration': json['migration'] == null ? undefined : json['migration'],
        'n': json['n'] == null ? undefined : json['n'],
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
        'progress': json['progress'] == null ? undefined : json['progress'],
        'recoverySeal': json['recovery_seal'] == null ? undefined : json['recovery_seal'],
        'sealed': json['sealed'] == null ? undefined : json['sealed'],
        'storageType': json['storage_type'] == null ? undefined : json['storage_type'],
        't': json['t'] == null ? undefined : json['t'],
        'type': json['type'] == null ? undefined : json['type'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}
function SealStatusResponseToJSON(json) {
    return SealStatusResponseToJSONTyped(json, false);
}
function SealStatusResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'build_date': value['buildDate'],
        'cluster_id': value['clusterId'],
        'cluster_name': value['clusterName'],
        'hcp_link_resource_ID': value['hcpLinkResourceID'],
        'hcp_link_status': value['hcpLinkStatus'],
        'initialized': value['initialized'],
        'migration': value['migration'],
        'n': value['n'],
        'nonce': value['nonce'],
        'progress': value['progress'],
        'recovery_seal': value['recoverySeal'],
        'sealed': value['sealed'],
        'storage_type': value['storageType'],
        't': value['t'],
        'type': value['type'],
        'version': value['version'],
    };
}
