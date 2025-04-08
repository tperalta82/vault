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
 * Check if a given object implements the InternalUiReadMountInformationResponse interface.
 */
export function instanceOfInternalUiReadMountInformationResponse(value) {
    return true;
}
export function InternalUiReadMountInformationResponseFromJSON(json) {
    return InternalUiReadMountInformationResponseFromJSONTyped(json, false);
}
export function InternalUiReadMountInformationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'accessor': json['accessor'] == null ? undefined : json['accessor'],
        'config': json['config'] == null ? undefined : json['config'],
        'description': json['description'] == null ? undefined : json['description'],
        'externalEntropyAccess': json['external_entropy_access'] == null ? undefined : json['external_entropy_access'],
        'local': json['local'] == null ? undefined : json['local'],
        'options': json['options'] == null ? undefined : json['options'],
        'path': json['path'] == null ? undefined : json['path'],
        'pluginVersion': json['plugin_version'] == null ? undefined : json['plugin_version'],
        'runningPluginVersion': json['running_plugin_version'] == null ? undefined : json['running_plugin_version'],
        'runningSha256': json['running_sha256'] == null ? undefined : json['running_sha256'],
        'sealWrap': json['seal_wrap'] == null ? undefined : json['seal_wrap'],
        'type': json['type'] == null ? undefined : json['type'],
        'uuid': json['uuid'] == null ? undefined : json['uuid'],
    };
}
export function InternalUiReadMountInformationResponseToJSON(json) {
    return InternalUiReadMountInformationResponseToJSONTyped(json, false);
}
export function InternalUiReadMountInformationResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'accessor': value['accessor'],
        'config': value['config'],
        'description': value['description'],
        'external_entropy_access': value['externalEntropyAccess'],
        'local': value['local'],
        'options': value['options'],
        'path': value['path'],
        'plugin_version': value['pluginVersion'],
        'running_plugin_version': value['runningPluginVersion'],
        'running_sha256': value['runningSha256'],
        'seal_wrap': value['sealWrap'],
        'type': value['type'],
        'uuid': value['uuid'],
    };
}
