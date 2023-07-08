// app.js
const AV = require('./libs/av-core-min');
const adapters = require('./libs/leancloud-adapters-weapp.js');

var plugin = requirePlugin("chatbot");

plugin.init({
    appid: "mK3ZdVrCEYzGvooOscGBPBXKPHbH9k", //微信对话开放平台小程序插件appid
    openid: "oB6jg6ENstneouhXefbujwJl7v2n", // 小程序用户的openid，必填项
    userHeader: "/images/机器人_o.png", // 用户头像,不传会弹出登录框
    userName: "Dylight", // 用户昵称,不传会弹出登录框
    anonymous: false, // 是否允许匿名用户登录，版本1.2.9后生效, 默认为false，设为true时，未传递userName、userHeader两个字段时将弹出登录框
    success: () => {},//非必填
    fail: (error) => {},//非必填
});





AV.setAdapters(adapters);
AV.init({
  appId: 'jPZP0j9ZtJQUCJdcF3PdTwOM-gzGzoHsz',
  appKey: 'C7mxBpCIE94iSOB5RqacfV0h',
  // 请将 xxx.example.com 替换为你的应用绑定的自定义 API 域名
  serverURLs: "https://jpzp0j9z.lc-cn-n1-shared.com",
});

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
