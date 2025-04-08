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
 * Check if a given object implements the PkiSignWithRoleResponse interface.
 */
export function instanceOfPkiSignWithRoleResponse(value) {
    return true;
}
export function PkiSignWithRoleResponseFromJSON(json) {
    return PkiSignWithRoleResponseFromJSONTyped(json, false);
}
export function PkiSignWithRoleResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'caChain': json['ca_chain'] == null ? undefined : json['ca_chain'],
        'certificate': json['certificate'] == null ? undefined : json['certificate'],
        'expiration': json['expiration'] == null ? undefined : json['expiration'],
        'issuingCa': json['issuing_ca'] == null ? undefined : json['issuing_ca'],
        'serialNumber': json['serial_number'] == null ? undefined : json['serial_number'],
    };
}
export function PkiSignWithRoleResponseToJSON(json) {
    return PkiSignWithRoleResponseToJSONTyped(json, false);
}
export function PkiSignWithRoleResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'ca_chain': value['caChain'],
        'certificate': value['certificate'],
        'expiration': value['expiration'],
        'issuing_ca': value['issuingCa'],
        'serial_number': value['serialNumber'],
    };
}
