### 电子科技大学清水河畔二手交易监听脚本

* 此脚本能够实时监控清水河畔二手交易板块的信息，**当出现你想要的物品时，程序会通过邮件的形式发送到配置的邮箱上**，让你不会错过任何一个你想要的物品。

#### 前置工作

* 本项目是基于`Nodejs + typescript`开发，所以在使用前，你需要做以下准备:
  1. 你需要一个`Nodejs`环境，[这里是下载的官网](https://nodejs.org/en)。
  2. 你需要`yarn`包管理器，使用命令`npm install -g yarn`进行下载，更多细节参考[yarn官网](https://www.yarnpkg.cn/)
  3. 输入命令`yarn`进行依赖安装。
* 如果已经搭建好上述环境并封装好依赖后，在**项目根目录**创建文件`config.json`，**该文件用于设置清水河畔的账号信息，邮件的发送邮箱，目的地邮箱以及轮询时间**，具体的配置如下图示例所示。

```json
{
    // 河畔账号
    "user": "UESTCRiver",
  	// 河畔密码
    "psw": "114514",
  	// 轮询监控的时间间隔，单位 ms
    "interval": 10000,
    "pushNotifyConfig": {
   	// 你想要监控的物品的关键字
        "keywords": ["网易云"],
    // 发送信息邮箱配置
        "originMailConfig": {
    // 发送邮箱的smtp域名，如下是qq邮箱的smtp域名
            "host": "smtp.qq.com",
    // 发送邮箱的账号密码设置，注意密码不是邮箱客户端的登录密码，而是smtp服务器的密码，这个可以在客户端里面获得
            "auth": {
                "user": "1919810@qq.com",
                "pass": "tokens"
            }
        },
    // 获取信息邮箱的账号
        "sendMailConfig": {
            "mail": "xxxxxx@163.com"
        }
    }
}
```

* 发送邮箱具体是指当程序监控到对应的物品时，**会使用该邮箱**来发送邮件来提示你二手商城出现了对应的物品帖子，以及发送邮箱设置中的`pass`字段设置可以参考[qq的授权码获取教程](https://zhuanlan.zhihu.com/p/643897161#:~:text=%E7%82%B9%E5%87%BB%E9%82%AE%E7%AE%B1%E2%80%9C%E8%AE%BE%E7%BD%AE%E2%80%9D%E6%8C%89%E9%92%AE%EF%BC%8C%E9%80%89%E6%8B%A9%E2%80%9C%E8%B4%A6%E6%88%B7%E2%80%9D%E9%80%89%E9%A1%B9%E5%8D%A1%20%E5%9C%A8%E2%80%9CPOP3%2FIMAP%2FSMTP%2FExchange%2FCardDAV%2FCalDAV%E6%9C%8D%E5%8A%A1%E2%80%9D%E6%A0%8F%E7%9B%AE%E4%B8%8B%EF%BC%8C%E6%89%BE%E5%88%B0%E2%80%9C%E5%BC%80%E5%90%AFPOP3%2FSMTP%E6%9C%8D%E5%8A%A1%E2%80%9D%E9%80%89%E9%A1%B9%EF%BC%8C%E5%B9%B6%E7%82%B9%E5%87%BB%E2%80%9C%E5%BC%80%E5%90%AF%E2%80%9D%E6%8C%89%E9%92%AE%2C,%E5%9C%A8%E5%BC%B9%E5%87%BA%E7%9A%84%E7%AA%97%E5%8F%A3%E4%B8%AD%EF%BC%8C%E6%8C%89%E7%85%A7%E6%8F%90%E7%A4%BA%E7%BB%91%E5%AE%9A%E6%89%8B%E6%9C%BA%E5%8F%B7%E7%A0%81%2C%20%E5%B9%B6%E7%94%9F%E6%88%90%E6%8E%88%E6%9D%83%E7%A0%81%E3%80%82)。



#### 直接运行

* 如果想直接在命令行运行，输入以下命令。

```shell
yarn start
```

#### 守护进程运行

* 如果想后台挂载该Node程序，则需要使用一个守护进程管理器`pm2`来管理，你需要提前下载`pm2`，命令如下所示。

```shell
yarn install -g pm2
```

* 然后输入以下命令来后台挂载程序。

```shell
yarn process
```

* 关于`pm2`更多的命令行参数使用[请参考`pm2`官方文档](https://pm2.keymetrics.io/)。

