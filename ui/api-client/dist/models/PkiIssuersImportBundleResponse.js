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
exports.instanceOfPkiIssuersImportBundleResponse = instanceOfPkiIssuersImportBundleResponse;
exports.PkiIssuersImportBundleResponseFromJSON = PkiIssuersImportBundleResponseFromJSON;
exports.PkiIssuersImportBundleResponseFromJSONTyped = PkiIssuersImportBundleResponseFromJSONTyped;
exports.PkiIssuersImportBundleResponseToJSON = PkiIssuersImportBundleResponseToJSON;
exports.PkiIssuersImportBundleResponseToJSONTyped = PkiIssuersImportBundleResponseToJSONTyped;
/**
 * Check if a given object implements the PkiIssuersImportBundleResponse interface.
 */
function instanceOfPkiIssuersImportBundleResponse(value) {
    return true;
}
function PkiIssuersImportBundleResponseFromJSON(json) {
    return PkiIssuersImportBundleResponseFromJSONTyped(json, false);
}
function PkiIssuersImportBundleResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'existingIssuers': json['existing_issuers'] == null ? undefined : json['existing_issuers'],
        'existingKeys': json['existing_keys'] == null ? undefined : json['existing_keys'],
        'importedIssuers': json['imported_issuers'] == null ? undefined : json['imported_issuers'],
        'importedKeys': json['imported_keys'] == null ? undefined : json['imported_keys'],
        'mapping': json['mapping'] == null ? undefined : json['mapping'],
    };
}
function PkiIssuersImportBundleResponseToJSON(json) {
    return PkiIssuersImportBundleResponseToJSONTyped(json, false);
}
function PkiIssuersImportBundleResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'existing_issuers': value['existingIssuers'],
        'existing_keys': value['existingKeys'],
        'imported_issuers': value['importedIssuers'],
        'imported_keys': value['importedKeys'],
        'mapping': value['mapping'],
    };
}
