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
 * Check if a given object implements the PkiConfigureUrlsResponse interface.
 */
export function instanceOfPkiConfigureUrlsResponse(value) {
    return true;
}
export function PkiConfigureUrlsResponseFromJSON(json) {
    return PkiConfigureUrlsResponseFromJSONTyped(json, false);
}
export function PkiConfigureUrlsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'crlDistributionPoints': json['crl_distribution_points'] == null ? undefined : json['crl_distribution_points'],
        'deltaCrlDistributionPoints': json['delta_crl_distribution_points'] == null ? undefined : json['delta_crl_distribution_points'],
        'enableTemplating': json['enable_templating'] == null ? undefined : json['enable_templating'],
        'issuingCertificates': json['issuing_certificates'] == null ? undefined : json['issuing_certificates'],
        'ocspServers': json['ocsp_servers'] == null ? undefined : json['ocsp_servers'],
    };
}
export function PkiConfigureUrlsResponseToJSON(json) {
    return PkiConfigureUrlsResponseToJSONTyped(json, false);
}
export function PkiConfigureUrlsResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'crl_distribution_points': value['crlDistributionPoints'],
        'delta_crl_distribution_points': value['deltaCrlDistributionPoints'],
        'enable_templating': value['enableTemplating'],
        'issuing_certificates': value['issuingCertificates'],
        'ocsp_servers': value['ocspServers'],
    };
}
