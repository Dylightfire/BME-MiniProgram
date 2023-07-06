// app.js
const AV = require('./libs/av-core-min');
const adapters = require('./libs/leancloud-adapters-weapp.js');

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
