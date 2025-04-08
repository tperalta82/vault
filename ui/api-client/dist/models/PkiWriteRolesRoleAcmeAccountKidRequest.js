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
exports.instanceOfPkiWriteRolesRoleAcmeAccountKidRequest = instanceOfPkiWriteRolesRoleAcmeAccountKidRequest;
exports.PkiWriteRolesRoleAcmeAccountKidRequestFromJSON = PkiWriteRolesRoleAcmeAccountKidRequestFromJSON;
exports.PkiWriteRolesRoleAcmeAccountKidRequestFromJSONTyped = PkiWriteRolesRoleAcmeAccountKidRequestFromJSONTyped;
exports.PkiWriteRolesRoleAcmeAccountKidRequestToJSON = PkiWriteRolesRoleAcmeAccountKidRequestToJSON;
exports.PkiWriteRolesRoleAcmeAccountKidRequestToJSONTyped = PkiWriteRolesRoleAcmeAccountKidRequestToJSONTyped;
/**
 * Check if a given object implements the PkiWriteRolesRoleAcmeAccountKidRequest interface.
 */
function instanceOfPkiWriteRolesRoleAcmeAccountKidRequest(value) {
    return true;
}
function PkiWriteRolesRoleAcmeAccountKidRequestFromJSON(json) {
    return PkiWriteRolesRoleAcmeAccountKidRequestFromJSONTyped(json, false);
}
function PkiWriteRolesRoleAcmeAccountKidRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'payload': json['payload'] == null ? undefined : json['payload'],
        '_protected': json['protected'] == null ? undefined : json['protected'],
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}
function PkiWriteRolesRoleAcmeAccountKidRequestToJSON(json) {
    return PkiWriteRolesRoleAcmeAccountKidRequestToJSONTyped(json, false);
}
function PkiWriteRolesRoleAcmeAccountKidRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'payload': value['payload'],
        'protected': value['_protected'],
        'signature': value['signature'],
    };
}
