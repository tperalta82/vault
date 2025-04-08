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
 * Check if a given object implements the KerberosConfigureRequest interface.
 */
export function instanceOfKerberosConfigureRequest(value) {
    return true;
}
export function KerberosConfigureRequestFromJSON(json) {
    return KerberosConfigureRequestFromJSONTyped(json, false);
}
export function KerberosConfigureRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'addGroupAliases': json['add_group_aliases'] == null ? undefined : json['add_group_aliases'],
        'keytab': json['keytab'] == null ? undefined : json['keytab'],
        'removeInstanceName': json['remove_instance_name'] == null ? undefined : json['remove_instance_name'],
        'serviceAccount': json['service_account'] == null ? undefined : json['service_account'],
    };
}
export function KerberosConfigureRequestToJSON(json) {
    return KerberosConfigureRequestToJSONTyped(json, false);
}
export function KerberosConfigureRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'add_group_aliases': value['addGroupAliases'],
        'keytab': value['keytab'],
        'remove_instance_name': value['removeInstanceName'],
        'service_account': value['serviceAccount'],
    };
}
