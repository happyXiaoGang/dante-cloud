"use strict";(self.webpackChunkeurynome_cloud_document=self.webpackChunkeurynome_cloud_document||[]).push([[446],{3166:(e,i,o)=>{o.r(i),o.d(i,{data:()=>t});const t={key:"v-25b47c13",path:"/others/",title:"常见问题",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Redis",slug:"redis",children:[{level:3,title:"[1]、本地Redis使用127.0.0.1可以访问，使用IP地址无法访问",slug:"_1-、本地redis使用127-0-0-1可以访问-使用ip地址无法访问",children:[]},{level:3,title:"[2]、io.lettuce.core.RedisCommandExecutionException: NOAUTH Authentication required",slug:"_2-、io-lettuce-core-rediscommandexecutionexception-noauth-authentication-required",children:[]},{level:3,title:"[3]、NOAUTH HELLO must be called with the client already authenticated, otherwise the HELLO AUTH ＜user＞",slug:"_3-、noauth-hello-must-be-called-with-the-client-already-authenticated-otherwise-the-hello-auth-user",children:[]}]},{level:2,title:"Nacos",slug:"nacos",children:[{level:3,title:"[1]、failover switch is not found, failover00-00---000-VIPSRV_FAILOVER_SWITCH-000---00-00",slug:"_1-、failover-switch-is-not-found-failover00-00-000-vipsrv-failover-switch-000-00-00",children:[]}]}],filePathRelative:"others/README.md",git:{updatedTime:1630997095e3,contributors:[{name:"herodotus",email:"pointer_v@qq.com",commits:3}]}}},5564:(e,i,o)=>{o.r(i),o.d(i,{default:()=>n});var t=o(6252);const d=(0,t.uE)('<h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h2><h3 id="_1-、本地redis使用127-0-0-1可以访问-使用ip地址无法访问" tabindex="-1"><a class="header-anchor" href="#_1-、本地redis使用127-0-0-1可以访问-使用ip地址无法访问" aria-hidden="true">#</a> [1]、本地Redis使用127.0.0.1可以访问，使用IP地址无法访问</h3><ul><li><strong>Windows</strong></li></ul><p>找到<code>redis.windows.conf</code>配置文件</p><p>1、将<code>protected-mode</code> 参数改为no。</p><p>2、注释掉<code>bind 127.0.0.1</code></p><p>3、重启redis服务</p><p><img src="/eurynome-cloud/images/redis/bind-ip.png" alt="Redis 密码"></p><ul><li><strong>Linux</strong></li></ul><p>1、linux对应的是<code>redis.conf</code>文件</p><p>2、 修改还是和windows一样</p><p>3、 修改完成重启服务</p><h3 id="_2-、io-lettuce-core-rediscommandexecutionexception-noauth-authentication-required" tabindex="-1"><a class="header-anchor" href="#_2-、io-lettuce-core-rediscommandexecutionexception-noauth-authentication-required" aria-hidden="true">#</a> [2]、io.lettuce.core.RedisCommandExecutionException: NOAUTH Authentication required</h3><p>出现该错误，是由于Redis中设置密码，而代码中未读到Redis密码或配置文件中没有配置密码导致的。</p><ul><li><strong>解决办法</strong>：</li></ul><ol><li>首先用<code>Redis</code>客户端，比如：<code>redis-desktop-manager</code>，进行<code>Redis</code>的连接测试。如果无法连接，那么请检查密码输入是否正确、本地网络等相关环境；如果可以正常连接，请进行下一步。</li><li>检查<code>Nacos</code>中，<code>Redis</code>相关配置是否配置了密码。一定要注意格式，检查格式缩进是否正确、<code>yaml</code>配置“：”后面是否空了一格。如果确定配置正确，请进行下一步。</li><li>检查服务是否可以正常访问到<code>Nacos</code>服务器，是否可以正确读取<code>Nacos</code>中配置。</li></ol>',17),a=(0,t.Uk)("以上操作均确保无误应该就可以正常使用了，如果还有问题，那么就请尽可能的准备详尽的信息，在Gitee中提"),l={href:"https://gitee.com/herodotus/eurynome-cloud/issues",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Uk)("Issue"),c=(0,t.uE)('<h3 id="_3-、noauth-hello-must-be-called-with-the-client-already-authenticated-otherwise-the-hello-auth-user" tabindex="-1"><a class="header-anchor" href="#_3-、noauth-hello-must-be-called-with-the-client-already-authenticated-otherwise-the-hello-auth-user" aria-hidden="true">#</a> [3]、NOAUTH HELLO must be called with the client already authenticated, otherwise the HELLO AUTH ＜user＞</h3><p>使用<code>spring boot data redis</code> 链接<code>redis sentinel</code>集群，会报此错。</p><p>原因是因为<code>redis sentinel</code>集群的<code>sentinel</code>配置文件没有配置密码，<code>sentinel</code>配置密码的方式和redis的密码配置方式一样，配置文件中加上<code>requirepass &lt;密码&gt;</code> 就行。</p><p>另外，<code>sentinel</code>中的<code>sentinel auth-pass &lt;master&gt; &lt;pass&gt;</code> 不是给<code>sentinel</code>配置密码，而是<code>sentinel</code>链接<code>redis master</code>的密码</p><h2 id="nacos" tabindex="-1"><a class="header-anchor" href="#nacos" aria-hidden="true">#</a> Nacos</h2><h3 id="_1-、failover-switch-is-not-found-failover00-00-000-vipsrv-failover-switch-000-00-00" tabindex="-1"><a class="header-anchor" href="#_1-、failover-switch-is-not-found-failover00-00-000-vipsrv-failover-switch-000-00-00" aria-hidden="true">#</a> [1]、failover switch is not found, failover00-00---000-VIPSRV_FAILOVER_SWITCH-000---00-00</h3><p>将Nacos日志设置到Debug级别，在服务运行起来之后，就会发现控制台持续输出以上Debug信息。</p><blockquote><p>这不是代码Bug，而是Nacos自身机制</p></blockquote><p>这是Nacos Client本地缓存及故障转移机制。</p><p>在Nacos源代码中，ServiceInfoHolder的构造方法中，会初始化一个FailoverReactor类。FailoverReactor的作用便是用来处理故障转移的。</p><p>FailoverReactor的构造方法会拼接故障根目录：${user.home}/nacos/naming/public/failover，其中public也有可能是其他的自定义命名空间；</p><p>主要逻辑就是：</p><ul><li>基本操作就是读取failover目录，查找故障转移【开关】文件为名为“failover00-00---000-VIPSRV_FAILOVER_SWITCH-000---00-00”。</li><li>如果故障转移文件不存在，则直接返回，不断输出Debug信息。</li><li>如果故障转移文件存在，比较文件修改时间，如果已经修改，则获取故障转移文件中的内容。</li><li>故障转移文件中存储了0和1标识。0表示关闭，1表示开启。</li><li>当为开启状态时，执行线程FailoverFileReader。</li></ul><p>解决办法</p><ol><li>将Nacos日志级别调整为INFO级别以上。</li><li>手动在${user.home}/nacos/naming/public目录下，新建文件failover00-00---000-VIPSRV_FAILOVER_SWITCH-000---00-00</li></ol>',15),n={render:function(e,i){const o=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[d,(0,t._)("p",null,[a,(0,t._)("a",l,[r,(0,t.Wm)(o)])]),c],64)}}}}]);