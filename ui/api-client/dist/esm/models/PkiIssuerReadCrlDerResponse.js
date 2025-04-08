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
 * Check if a given object implements the PkiIssuerReadCrlDerResponse interface.
 */
export function instanceOfPkiIssuerReadCrlDerResponse(value) {
    return true;
}
export function PkiIssuerReadCrlDerResponseFromJSON(json) {
    return PkiIssuerReadCrlDerResponseFromJSONTyped(json, false);
}
export function PkiIssuerReadCrlDerResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'crl': json['crl'] == null ? undefined : json['crl'],
    };
}
export function PkiIssuerReadCrlDerResponseToJSON(json) {
    return PkiIssuerReadCrlDerResponseToJSONTyped(json, false);
}
export function PkiIssuerReadCrlDerResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'crl': value['crl'],
    };
}
