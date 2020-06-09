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
 * Module Name: eurynome-cloud-upms-api
 * File Name: OauthClientDetailsRepository.java
 * Author: gengwei.zheng
 * Date: 2020/6/8 下午4:10
 * LastModified: 2020/5/23 上午9:32
 */

package cn.herodotus.eurynome.upms.api.repository.oauth;

import cn.herodotus.eurynome.crud.repository.BaseRepository;
import cn.herodotus.eurynome.upms.api.entity.oauth.OauthClientDetails;

/**
 * <p> Description : OauthClientDetailRepository </p>
 *
 * @author : gengwei.zheng
 * @date : 2020/3/19 16:57
 */
public interface OauthClientDetailsRepository extends BaseRepository<OauthClientDetails, String> {


}
