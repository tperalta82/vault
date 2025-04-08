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
exports.instanceOfGroupUpdateByIdRequest = instanceOfGroupUpdateByIdRequest;
exports.GroupUpdateByIdRequestFromJSON = GroupUpdateByIdRequestFromJSON;
exports.GroupUpdateByIdRequestFromJSONTyped = GroupUpdateByIdRequestFromJSONTyped;
exports.GroupUpdateByIdRequestToJSON = GroupUpdateByIdRequestToJSON;
exports.GroupUpdateByIdRequestToJSONTyped = GroupUpdateByIdRequestToJSONTyped;
/**
 * Check if a given object implements the GroupUpdateByIdRequest interface.
 */
function instanceOfGroupUpdateByIdRequest(value) {
    return true;
}
function GroupUpdateByIdRequestFromJSON(json) {
    return GroupUpdateByIdRequestFromJSONTyped(json, false);
}
function GroupUpdateByIdRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'memberEntityIds': json['member_entity_ids'] == null ? undefined : json['member_entity_ids'],
        'memberGroupIds': json['member_group_ids'] == null ? undefined : json['member_group_ids'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'name': json['name'] == null ? undefined : json['name'],
        'policies': json['policies'] == null ? undefined : json['policies'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}
function GroupUpdateByIdRequestToJSON(json) {
    return GroupUpdateByIdRequestToJSONTyped(json, false);
}
function GroupUpdateByIdRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'member_entity_ids': value['memberEntityIds'],
        'member_group_ids': value['memberGroupIds'],
        'metadata': value['metadata'],
        'name': value['name'],
        'policies': value['policies'],
        'type': value['type'],
    };
}
