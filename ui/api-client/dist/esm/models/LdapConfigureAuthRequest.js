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
* @export
* @enum {string}
*/
export var LdapConfigureAuthRequestDereferenceAliasesEnum;
(function (LdapConfigureAuthRequestDereferenceAliasesEnum) {
    LdapConfigureAuthRequestDereferenceAliasesEnum["NEVER"] = "never";
    LdapConfigureAuthRequestDereferenceAliasesEnum["FINDING"] = "finding";
    LdapConfigureAuthRequestDereferenceAliasesEnum["SEARCHING"] = "searching";
    LdapConfigureAuthRequestDereferenceAliasesEnum["ALWAYS"] = "always";
})(LdapConfigureAuthRequestDereferenceAliasesEnum || (LdapConfigureAuthRequestDereferenceAliasesEnum = {}));
/**
* @export
* @enum {string}
*/
export var LdapConfigureAuthRequestTlsMaxVersionEnum;
(function (LdapConfigureAuthRequestTlsMaxVersionEnum) {
    LdapConfigureAuthRequestTlsMaxVersionEnum["TLS10"] = "tls10";
    LdapConfigureAuthRequestTlsMaxVersionEnum["TLS11"] = "tls11";
    LdapConfigureAuthRequestTlsMaxVersionEnum["TLS12"] = "tls12";
    LdapConfigureAuthRequestTlsMaxVersionEnum["TLS13"] = "tls13";
})(LdapConfigureAuthRequestTlsMaxVersionEnum || (LdapConfigureAuthRequestTlsMaxVersionEnum = {}));
/**
* @export
* @enum {string}
*/
export var LdapConfigureAuthRequestTlsMinVersionEnum;
(function (LdapConfigureAuthRequestTlsMinVersionEnum) {
    LdapConfigureAuthRequestTlsMinVersionEnum["TLS10"] = "tls10";
    LdapConfigureAuthRequestTlsMinVersionEnum["TLS11"] = "tls11";
    LdapConfigureAuthRequestTlsMinVersionEnum["TLS12"] = "tls12";
    LdapConfigureAuthRequestTlsMinVersionEnum["TLS13"] = "tls13";
})(LdapConfigureAuthRequestTlsMinVersionEnum || (LdapConfigureAuthRequestTlsMinVersionEnum = {}));
/**
 * Check if a given object implements the LdapConfigureAuthRequest interface.
 */
export function instanceOfLdapConfigureAuthRequest(value) {
    return true;
}
export function LdapConfigureAuthRequestFromJSON(json) {
    return LdapConfigureAuthRequestFromJSONTyped(json, false);
}
export function LdapConfigureAuthRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'anonymousGroupSearch': json['anonymous_group_search'] == null ? undefined : json['anonymous_group_search'],
        'binddn': json['binddn'] == null ? undefined : json['binddn'],
        'bindpass': json['bindpass'] == null ? undefined : json['bindpass'],
        'caseSensitiveNames': json['case_sensitive_names'] == null ? undefined : json['case_sensitive_names'],
        'certificate': json['certificate'] == null ? undefined : json['certificate'],
        'clientTlsCert': json['client_tls_cert'] == null ? undefined : json['client_tls_cert'],
        'clientTlsKey': json['client_tls_key'] == null ? undefined : json['client_tls_key'],
        'connectionTimeout': json['connection_timeout'] == null ? undefined : json['connection_timeout'],
        'denyNullBind': json['deny_null_bind'] == null ? undefined : json['deny_null_bind'],
        'dereferenceAliases': json['dereference_aliases'] == null ? undefined : json['dereference_aliases'],
        'disableAutomatedRotation': json['disable_automated_rotation'] == null ? undefined : json['disable_automated_rotation'],
        'discoverdn': json['discoverdn'] == null ? undefined : json['discoverdn'],
        'enableSamaccountnameLogin': json['enable_samaccountname_login'] == null ? undefined : json['enable_samaccountname_login'],
        'groupattr': json['groupattr'] == null ? undefined : json['groupattr'],
        'groupdn': json['groupdn'] == null ? undefined : json['groupdn'],
        'groupfilter': json['groupfilter'] == null ? undefined : json['groupfilter'],
        'insecureTls': json['insecure_tls'] == null ? undefined : json['insecure_tls'],
        'maxPageSize': json['max_page_size'] == null ? undefined : json['max_page_size'],
        'passwordPolicy': json['password_policy'] == null ? undefined : json['password_policy'],
        'requestTimeout': json['request_timeout'] == null ? undefined : json['request_timeout'],
        'rotationPeriod': json['rotation_period'] == null ? undefined : json['rotation_period'],
        'rotationSchedule': json['rotation_schedule'] == null ? undefined : json['rotation_schedule'],
        'rotationWindow': json['rotation_window'] == null ? undefined : json['rotation_window'],
        'starttls': json['starttls'] == null ? undefined : json['starttls'],
        'tlsMaxVersion': json['tls_max_version'] == null ? undefined : json['tls_max_version'],
        'tlsMinVersion': json['tls_min_version'] == null ? undefined : json['tls_min_version'],
        'tokenBoundCidrs': json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
        'tokenExplicitMaxTtl': json['token_explicit_max_ttl'] == null ? undefined : json['token_explicit_max_ttl'],
        'tokenMaxTtl': json['token_max_ttl'] == null ? undefined : json['token_max_ttl'],
        'tokenNoDefaultPolicy': json['token_no_default_policy'] == null ? undefined : json['token_no_default_policy'],
        'tokenNumUses': json['token_num_uses'] == null ? undefined : json['token_num_uses'],
        'tokenPeriod': json['token_period'] == null ? undefined : json['token_period'],
        'tokenPolicies': json['token_policies'] == null ? undefined : json['token_policies'],
        'tokenTtl': json['token_ttl'] == null ? undefined : json['token_ttl'],
        'tokenType': json['token_type'] == null ? undefined : json['token_type'],
        'upndomain': json['upndomain'] == null ? undefined : json['upndomain'],
        'url': json['url'] == null ? undefined : json['url'],
        'usePre111GroupCnBehavior': json['use_pre111_group_cn_behavior'] == null ? undefined : json['use_pre111_group_cn_behavior'],
        'useTokenGroups': json['use_token_groups'] == null ? undefined : json['use_token_groups'],
        'userattr': json['userattr'] == null ? undefined : json['userattr'],
        'userdn': json['userdn'] == null ? undefined : json['userdn'],
        'userfilter': json['userfilter'] == null ? undefined : json['userfilter'],
        'usernameAsAlias': json['username_as_alias'] == null ? undefined : json['username_as_alias'],
    };
}
export function LdapConfigureAuthRequestToJSON(json) {
    return LdapConfigureAuthRequestToJSONTyped(json, false);
}
export function LdapConfigureAuthRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'anonymous_group_search': value['anonymousGroupSearch'],
        'binddn': value['binddn'],
        'bindpass': value['bindpass'],
        'case_sensitive_names': value['caseSensitiveNames'],
        'certificate': value['certificate'],
        'client_tls_cert': value['clientTlsCert'],
        'client_tls_key': value['clientTlsKey'],
        'connection_timeout': value['connectionTimeout'],
        'deny_null_bind': value['denyNullBind'],
        'dereference_aliases': value['dereferenceAliases'],
        'disable_automated_rotation': value['disableAutomatedRotation'],
        'discoverdn': value['discoverdn'],
        'enable_samaccountname_login': value['enableSamaccountnameLogin'],
        'groupattr': value['groupattr'],
        'groupdn': value['groupdn'],
        'groupfilter': value['groupfilter'],
        'insecure_tls': value['insecureTls'],
        'max_page_size': value['maxPageSize'],
        'password_policy': value['passwordPolicy'],
        'request_timeout': value['requestTimeout'],
        'rotation_period': value['rotationPeriod'],
        'rotation_schedule': value['rotationSchedule'],
        'rotation_window': value['rotationWindow'],
        'starttls': value['starttls'],
        'tls_max_version': value['tlsMaxVersion'],
        'tls_min_version': value['tlsMinVersion'],
        'token_bound_cidrs': value['tokenBoundCidrs'],
        'token_explicit_max_ttl': value['tokenExplicitMaxTtl'],
        'token_max_ttl': value['tokenMaxTtl'],
        'token_no_default_policy': value['tokenNoDefaultPolicy'],
        'token_num_uses': value['tokenNumUses'],
        'token_period': value['tokenPeriod'],
        'token_policies': value['tokenPolicies'],
        'token_ttl': value['tokenTtl'],
        'token_type': value['tokenType'],
        'upndomain': value['upndomain'],
        'url': value['url'],
        'use_pre111_group_cn_behavior': value['usePre111GroupCnBehavior'],
        'use_token_groups': value['useTokenGroups'],
        'userattr': value['userattr'],
        'userdn': value['userdn'],
        'userfilter': value['userfilter'],
        'username_as_alias': value['usernameAsAlias'],
    };
}
