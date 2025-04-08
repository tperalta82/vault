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
 * Check if a given object implements the PkiIssuerResignCrlsRequest interface.
 */
export function instanceOfPkiIssuerResignCrlsRequest(value) {
    return true;
}
export function PkiIssuerResignCrlsRequestFromJSON(json) {
    return PkiIssuerResignCrlsRequestFromJSONTyped(json, false);
}
export function PkiIssuerResignCrlsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'crlNumber': json['crl_number'] == null ? undefined : json['crl_number'],
        'crls': json['crls'] == null ? undefined : json['crls'],
        'deltaCrlBaseNumber': json['delta_crl_base_number'] == null ? undefined : json['delta_crl_base_number'],
        'format': json['format'] == null ? undefined : json['format'],
        'nextUpdate': json['next_update'] == null ? undefined : json['next_update'],
    };
}
export function PkiIssuerResignCrlsRequestToJSON(json) {
    return PkiIssuerResignCrlsRequestToJSONTyped(json, false);
}
export function PkiIssuerResignCrlsRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'crl_number': value['crlNumber'],
        'crls': value['crls'],
        'delta_crl_base_number': value['deltaCrlBaseNumber'],
        'format': value['format'],
        'next_update': value['nextUpdate'],
    };
}
