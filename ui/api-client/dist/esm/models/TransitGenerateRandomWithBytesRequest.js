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
/**
 * Check if a given object implements the TransitGenerateRandomWithBytesRequest interface.
 */
export function instanceOfTransitGenerateRandomWithBytesRequest(value) {
    return true;
}
export function TransitGenerateRandomWithBytesRequestFromJSON(json) {
    return TransitGenerateRandomWithBytesRequestFromJSONTyped(json, false);
}
export function TransitGenerateRandomWithBytesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bytes': json['bytes'] == null ? undefined : json['bytes'],
        'format': json['format'] == null ? undefined : json['format'],
    };
}
export function TransitGenerateRandomWithBytesRequestToJSON(json) {
    return TransitGenerateRandomWithBytesRequestToJSONTyped(json, false);
}
export function TransitGenerateRandomWithBytesRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'bytes': value['bytes'],
        'format': value['format'],
    };
}
