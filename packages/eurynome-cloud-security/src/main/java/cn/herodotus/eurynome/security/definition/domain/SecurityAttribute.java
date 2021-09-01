/*
 * Copyright (c) 2019-2021 Gengwei Zheng (herodotus@aliyun.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Project Name: eurynome-cloud
 * Module Name: eurynome-cloud-security
 * File Name: SecurityAttribute.java
 * Author: gengwei.zheng
 * Date: 2021/08/11 20:52:11
 */

package cn.herodotus.eurynome.security.definition.domain;

import com.google.common.base.MoreObjects;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.io.Serializable;
import java.util.Set;

/**
 * <p>Description: Security Metadata 传输数据实体 </p>
 *
 * @author : gengwei.zheng
 * @date : 2021/8/11 20:52
 */
public class SecurityAttribute implements Serializable {

    private String attributeId;

    private String attributeCode;

    private String attributeName;

    private String expression;

    private String manualSetting;

    private String ipAddress;

    private String url;

    private String requestMethod;

    private String serviceId;

    private Set<SimpleGrantedAuthority> roles;

    private Set<SimpleGrantedAuthority> scopes;

    public String getAttributeId() {
        return attributeId;
    }

    public void setAttributeId(String attributeId) {
        this.attributeId = attributeId;
    }

    public String getAttributeCode() {
        return attributeCode;
    }

    public void setAttributeCode(String attributeCode) {
        this.attributeCode = attributeCode;
    }

    public String getAttributeName() {
        return attributeName;
    }

    public void setAttributeName(String attributeName) {
        this.attributeName = attributeName;
    }

    public String getExpression() {
        return expression;
    }

    public void setExpression(String expression) {
        this.expression = expression;
    }

    public String getManualSetting() {
        return manualSetting;
    }

    public void setManualSetting(String manualSetting) {
        this.manualSetting = manualSetting;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getRequestMethod() {
        return requestMethod;
    }

    public void setRequestMethod(String requestMethod) {
        this.requestMethod = requestMethod;
    }

    public String getServiceId() {
        return serviceId;
    }

    public void setServiceId(String serviceId) {
        this.serviceId = serviceId;
    }

    public Set<SimpleGrantedAuthority> getRoles() {
        return roles;
    }

    public void setRoles(Set<SimpleGrantedAuthority> roles) {
        this.roles = roles;
    }

    public Set<SimpleGrantedAuthority> getScopes() {
        return scopes;
    }

    public void setScopes(Set<SimpleGrantedAuthority> scopes) {
        this.scopes = scopes;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("attributeId", attributeId)
                .add("attributeCode", attributeCode)
                .add("attributeName", attributeName)
                .add("expression", expression)
                .add("manualSetting", manualSetting)
                .add("ipAddress", ipAddress)
                .add("url", url)
                .add("requestMethod", requestMethod)
                .add("serviceId", serviceId)
                .toString();
    }
}