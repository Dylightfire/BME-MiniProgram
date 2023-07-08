// pages/register/register.js
const app = getApp();
const AV = require('../../libs/av-core-min.js');

Page({
  data: {
    username: '',
    password: '',
    nickname: '',
  },

  inputUsername(e) {
    this.setData({
      username: e.detail.value,
    })
  },

  inputPassword(e) {
    this.setData({
      password: e.detail.value,
    })
  },

  inputNickname(e) {
    this.setData({
      nickname: e.detail.value,
    })
  },

  register() {
    const {
      username,
      password,
      nickname,
    } = this.data;
    const user = new AV.User();
    if (username) user.set({username});
    if (password) user.set({password});
    if (nickname) user.set({nickname});
    user.save().then(() => {
      wx.showToast({
        title: '注册成功',
        icon: 'success',
      });
    }).catch(error => {
      wx.showToast({
        title:error.message,
        icon:'none'
      })
    });
  },

  onLoad(options) {
    this.setData({
      username: options.username,
    })
  }


})