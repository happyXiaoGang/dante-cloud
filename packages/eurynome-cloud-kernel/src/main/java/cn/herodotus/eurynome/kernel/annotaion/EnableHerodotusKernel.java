/*
 * Copyright (c) 2019-2020 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 * Project Name: eurynome-cloud
 * Module Name: eurynome-cloud-kernel
 * File Name: EnableHerodotusKernel.java
 * Author: gengwei.zheng
 * Date: 2020/6/9 下午1:06
 * LastModified: 2020/6/9 下午1:06
 */

package cn.herodotus.eurynome.kernel.annotaion;

import cn.herodotus.eurynome.kernel.properties.ManagementProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import java.lang.annotation.*;

/**
 * <p>Project: eurynome-cloud </p>
 * <p>File: EnableHerodotusKernel </p>
 *
 * <p>Description: 开启Herodotus核心注解 </p>
 *
 * 目前主要功能：
 * 1.开启ManagementProperties
 * 2.启用日志收集
 *
 * @author : gengwei.zheng
 * @date : 2020/6/9 13:06
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@EnableConfigurationProperties({
        ManagementProperties.class
})
@EnableLogCenter
public @interface EnableHerodotusKernel {
}
