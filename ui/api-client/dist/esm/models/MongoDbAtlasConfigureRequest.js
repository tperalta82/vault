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
/**
 * Check if a given object implements the MongoDbAtlasConfigureRequest interface.
 */
export function instanceOfMongoDbAtlasConfigureRequest(value) {
    if (!('privateKey' in value) || value['privateKey'] === undefined)
        return false;
    if (!('publicKey' in value) || value['publicKey'] === undefined)
        return false;
    return true;
}
export function MongoDbAtlasConfigureRequestFromJSON(json) {
    return MongoDbAtlasConfigureRequestFromJSONTyped(json, false);
}
export function MongoDbAtlasConfigureRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'privateKey': json['private_key'],
        'publicKey': json['public_key'],
    };
}
export function MongoDbAtlasConfigureRequestToJSON(json) {
    return MongoDbAtlasConfigureRequestToJSONTyped(json, false);
}
export function MongoDbAtlasConfigureRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'private_key': value['privateKey'],
        'public_key': value['publicKey'],
    };
}
