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
 * Check if a given object implements the RekeyAttemptInitializeRequest interface.
 */
export function instanceOfRekeyAttemptInitializeRequest(value) {
    return true;
}
export function RekeyAttemptInitializeRequestFromJSON(json) {
    return RekeyAttemptInitializeRequestFromJSONTyped(json, false);
}
export function RekeyAttemptInitializeRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'backup': json['backup'] == null ? undefined : json['backup'],
        'pgpKeys': json['pgp_keys'] == null ? undefined : json['pgp_keys'],
        'requireVerification': json['require_verification'] == null ? undefined : json['require_verification'],
        'secretShares': json['secret_shares'] == null ? undefined : json['secret_shares'],
        'secretThreshold': json['secret_threshold'] == null ? undefined : json['secret_threshold'],
    };
}
export function RekeyAttemptInitializeRequestToJSON(json) {
    return RekeyAttemptInitializeRequestToJSONTyped(json, false);
}
export function RekeyAttemptInitializeRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'backup': value['backup'],
        'pgp_keys': value['pgpKeys'],
        'require_verification': value['requireVerification'],
        'secret_shares': value['secretShares'],
        'secret_threshold': value['secretThreshold'],
    };
}
