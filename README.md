#### 下方提供使用到的 **Secrets全集合**

| Name                    |   归属   | 属性   | 说明                                                         |
| :---------------------: | :----------: | --------- | ------------------------------------------------------------ |
| `JD_COOKIE`             |   京东   | 必须   | 京东cookie,多个账号的cookie使用`&`隔开或者换行。具体获取参考[浏览器获取京东cookie教程](https://github.com/lxk0301/jd_scripts/blob/master/backUp/GetJdCookie.md) 或者 [插件获取京东cookie教程](https://github.com/lxk0301/jd_scripts/blob/master/backUp/GetJdCookie2.md) |
| `JD_USER_AGENT`         |   京东   | 非必须   | 自定义此库里京东系列脚本的UserAgent，不懂不知不会UserAgent的请不要随意填写内容。具体获取参考此[issue](https://github.com/lxk0301/jd_scripts/issues/127) |
| `JD_BEAN_STOP`          |   京东   | 非必须   | jd_bean_sign.js自定义延迟签到,单位毫秒. 默认分批并发无延迟. 延迟作用于每个签到接口, 如填入延迟则切换顺序签到(耗时较长),如需填写建议输入数字`1`，详见[此处说明](https://github.com/NobyDa/Script/blob/master/JD-DailyBonus/JD_DailyBonus.js#L93) |
| `JD_BEAN_SIGN_STOP_NOTIFY`|   京东   | 非必须   | `jd_bean_sign.js`脚本运行后不推送签到结果通知，默认推送，填`true`表示不发送通知 |
| `JD_BEAN_SIGN_NOTIFY_SIMPLE`|   京东   | 非必须   | `jd_bean_sign.js`脚本运行后推送签到结果简洁版通知，默认推送全部签到结果，填`true`表示推送简洁通知，[效果图](./icon/bean_sign_simple.jpg) |
| `JD_DEBUG`              |   脚本打印log   | 非必须   | 运行脚本时，是否显示log,默认显示。改成false表示不显示，注重隐私的人可以在设置secret -> `Name:JD_DEBUG,Value:false` |
| `PUSH_KEY`              |   微信推送   | 非必须 | cookie失效推送[server酱的微信通知](http://sc.ftqq.com/3.version) |
| `BARK_PUSH`             |   [BARK推送](https://apps.apple.com/us/app/bark-customed-notifications/id1403753865)   | 非必须 | cookie失效推送BARK这个APP,填写内容是app提供的`设备码`，例如：https://api.day.app/123 ，那么此处的设备码就是`123`，再不懂看 [这个图](icon/bark.jpg) |
| `BARK_SOUND`            |   [BARK推送](https://apps.apple.com/us/app/bark-customed-notifications/id1403753865)   | 非必须 | bark推送声音设置，例如`choo`,具体值请在`bark`-`推送铃声`-`查看所有铃声` |
| `TG_BOT_TOKEN`          |   telegram推送   | 非必须 | tg推送,填写自己申请[@BotFather](https://t.me/BotFather)的Token,如`10xxx4:AAFcqxxxxgER5uw` , [具体教程](./backUp/TG_PUSH.md) |
| `TG_USER_ID`            |   telegram推送   | 非必须 | tg推送,填写[@getuseridbot](https://t.me/getuseridbot)中获取到的纯数字ID, [具体教程](./backUp/TG_PUSH.md) |
| `DD_BOT_TOKEN`          |   钉钉推送   | 非必须 | 钉钉推送[官方文档](https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq) ,只需`https://oapi.dingtalk.com/robot/send?access_token=XXX` 等于符号后面的XXX， 注：如果钉钉推送只填写`DD_BOT_TOKEN`，那么安全设置需勾选`自定义关键词`，内容输入输入`账号`即可，其他安全设置不要勾选 |
| `DD_BOT_SECRET`         |   钉钉推送   | 非必须 | 密钥，机器人安全设置页面，加签一栏下面显示的SEC开头的字符串 , 注:填写了`DD_BOT_TOKEN`和`DD_BOT_SECRET`，钉钉机器人安全设置只需勾选`加签`即可，其他选项不要勾选,再不懂看 [这个图](icon/DD_bot.png) |
| `IGOT_PUSH_KEY`         |   iGot推送   | 非必须 | iGot聚合推送，支持多方式推送，确保消息可达。 [参考文档](https://wahao.github.io/Bark-MP-helper ) |
| `PET_NOTIFY_CONTROL`    | 东东萌宠推送开关  | 非必须 | 控制京东萌宠是否静默运行,`false`为否(发送推送通知消息),`true`为是(即：不发送推送通知消息)              |
| `FRUIT_NOTIFY_CONTROL`  | 东东农场推送开关  | 非必须 | 控制京东农场是否静默运行,`false`为否(发送推送通知消息),`true`为是(即：不发送推送通知消息)              |
| `JD_JOY_REWARD_NOTIFY`  | 宠汪汪兑换京豆推送开关  | 非必须 | 控制jd_joy_reward.js脚本是否静默运行,`false`为否(发送推送通知消息),`true`为是(即：不发送推送通知消息) 
| `JD_818_SHAREID_NOTIFY` | 京东818互助码通知开关  | 非必须 | 控制jd_818.js脚本是否在获取互助码后通知,`true`为是(发送推送通知消息),`false`为否(即：不发送推送通知消息)              |
| `JOY_FEED_COUNT`        | 宠汪汪喂食数量  | 非必须 | 控制jd_joy_feedPets.js脚本喂食数量  ,可以填的数字10,20,40,80 , 其他数字不可.              |
| `JOY_HELP_FEED`         | 宠汪汪帮好友喂食  | 非必须 | 控制jd_joy_steal.js脚本是否给好友喂食,`false`为否,`true`为是(给好友喂食)              |
| `JOY_RUN_FLAG`          | 宠汪汪参加双人赛跑  | 非必须 | 控制jd_joy.js脚本是否参加双人赛跑,`false`为否,`true`为是，脚本默认是`true`              |
| `JD_JOY_REWARD_NAME`    | 宠汪汪积分兑换多少京豆  | 非必须 | 目前可填值为`20`或者`500`,脚本默认`20`,`0`表示不兑换京豆              |
| `MARKET_COIN_TO_BEANS`  | 京小超兑换京豆数量  | 非必须 | 控制jd_blueCoin.js兑换京豆数量,可输入值为`20`或者`1000`的数字或者其他商品的名称,例如`碧浪洗衣凝珠`              |
| `MARKET_REWARD_NOTIFY`  | 京小超兑换奖品推送开关  | 非必须 | 控制jd_blueCoin.js兑换奖品成功后是否静默运行, `false`为否(发送推送通知消息),`true`为是(即：不发送推送通知消息)             |
| `SUPERMARKET_UPGRADE`   |  京小超自动升级  | 非必须 | 自动升级,顺序:解锁升级商品、升级货架,`true`表示自动升级,`false`表示关闭自动升级 |
| `BUSINESS_CIRCLE_JUMP`  |  京小超自动更换商圈  | 非必须 | 小于对方300热力值自动更换商圈队伍,`true`表示运行,`false`表示禁止 |
| `SUPERMARKET_LOTTERY`   |  京小超抽奖  | 非必须 | 每天运行脚本是否使用金币去抽奖,`true`表示抽奖,`false`表示不抽奖 |
| `FRUIT_BEAN_CARD`       |  农场使用水滴换豆卡  | 非必须 | 农场使用水滴换豆卡(如果出现限时活动时100g水换20豆,此时比浇水划算,推荐换豆),`true`表示换豆(不浇水),`false`表示不换豆(继续浇水),脚本默认是浇水 |
| `UN_SUBSCRIBES`         |  jd_unsubscribe.js  | 非必须 | 共四个参数,换行隔开. 四个参数分别表示`取关商品数量`,`取关店铺数量`,`遇到此商品不再进行取关`, `遇到此店铺不再进行取关`，[具体使用往下看](#取关店铺secret的说明)|
| `FRUITSHARECODES`       |  东东农场互助码  | 非必须 | 填写规则请看 [jdFruitShareCodes.js](https://github.com/lxk0301/jd_scripts/blob/master/jdFruitShareCodes.js) 或见下方[互助码的填写规则](#互助码的填写规则) |
| `PETSHARECODES`         |  东东萌宠互助码  | 非必须 | 填写规则请看 [jdPetShareCodes.js](https://github.com/lxk0301/jd_scripts/blob/master/jdPetShareCodes.js) 或见下方[互助码的填写规则](#互助码的填写规则) |
| `PLANT_BEAN_SHARECODES` |  种豆得豆互助码  | 非必须 | 填写规则请看 [jdPlantBeanShareCodes.js](https://github.com/lxk0301/jd_scripts/blob/master/jdPlantBeanShareCodes.js) 或见下方[互助码的填写规则](#互助码的填写规则) |
| `SUPERMARKET_SHARECODES`|  京小超商圈互助码  | 非必须 | 填写规则请看 [jdSuperMarketShareCodes.js](https://github.com/lxk0301/jd_scripts/blob/master/jdSuperMarketShareCodes.js) 或见下方[互助码的填写规则](#互助码的填写规则) |
| `DDFACTORY_SHARECODES`|  东东工厂互助码  | 非必须 | 填写规则请看 [jdFactoryShareCodes.js](https://github.com/lxk0301/jd_scripts/blob/master/jdFactoryShareCodes.js) 或见下方[互助码的填写规则](#互助码的填写规则) |
| `DREAM_FACTORY_SHARE_CODES`|  京喜工厂互助码  | 非必须 | 填写规则请看 [jdDreamFactoryShareCodes.js](https://github.com/lxk0301/jd_scripts/blob/master/jdDreamFactoryShareCodes.js) 或见下方[互助码的填写规则](#互助码的填写规则) |
| `TG_PROXY_HOST`   |  Telegram 代理的 IP  | 非必须 | 代理类型为 http。例子：http代理 http://127.0.0.1:1080 则填写 127.0.0.1 |
| `TG_PROXY_PORT`   |  Telegram 代理的端口  | 非必须 | 例子：http代理 http://127.0.0.1:1080 则填写 1080 |
| `MONEY_TREE_SELL_FRUIT` |  摇钱树是否卖出金果  | 非必须 | 控制摇钱树脚本是否自动卖出金果兑换成金币，`true`卖出，`false`不卖出，默认`true` |
| `FACTORAY_WANTPRODUCT_NAME` |  东东工厂心仪商品  | 非必须 | 提供心仪商品名称(请尽量填写完整和别的商品有区分度)，达到条件后兑换，如不提供则会兑换当前所选商品 |
