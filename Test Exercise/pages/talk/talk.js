Page({
  data: {
    chatRecords: [],
    showComponent: false,
    buttonNames: ['洁面', '保湿', '精华'],
    ClearFace: false,
    ClearFace_1: false,
    Moisturize: false,
    Moisturize_1: false,
    Essence: false,
    Essence_1: false,
  },
  updateValue: function (componentId, newValue) {
    const component = this.selectComponent(componentId);
    if (component) {
      component.updateValue({
        detail: {
          newValue: newValue
        }
      });
    }
  },

  onLoad: function () {
    this.addRobotMessageWithDelay();
  },

  addRobotMessageWithDelay: function () {
    const robotMessages = [
      '欢迎来到我的商店！',
      '有什么我能帮你的嘛？',
    ];

    let index = 0;
    const addMessage = () => {
      const robotMessage = {
        role: 'robot',
        content: robotMessages[index]
      };
      const chatRecords = this.data.chatRecords.concat(robotMessage);
      this.setData({
        chatRecords
      });

      index++;
      if (index < robotMessages.length) {
        setTimeout(addMessage, 1000); // 1秒延时
      } else {
        setTimeout(() => {
          this.setData({
            showComponent: true
          });
          const componentIds = ['#JieMian', '#BaoShi', '#JingHua'];
          const buttonNames = this.data.buttonNames;
          for (let i = 0; i < componentIds.length; i++) {
            this.updateValue(componentIds[i], buttonNames[i]);
          }
        }, 1000);
      }
    };
    setTimeout(addMessage, 1000); // 1秒延时开始添加机器人消息
  },


  handleButtonClick1: function (event) {
    const recommendation = `关于“洁面”我有以下推荐：`;
    const robotMessage = {
      role: 'robotJieMian',
      content: recommendation
    };
    this.setData({
      ClearFace: true,
      Moisturize: false,
      Essence: false,
    });
    setTimeout(() => {
      const chatRecords = this.data.chatRecords.concat(robotMessage);
      this.setData({
        chatRecords,
      });
      setTimeout(() => {
        this.setData({
          ClearFace_1: true,
        })
      }, 1000);
    }, 1000);
  },
  KeRunJump:function (event) {
    wx.navigateTo({
      url: '/pages/recommend_1/recommend_1',
    })
  },

  handleButtonClick2: function (event) {
    const buttonName = event.currentTarget.dataset.buttonName;
    const recommendation = `关于"${buttonName}"我有以下推荐：`;
    const robotMessage = {
      role: 'robotBaoShi',
      content: recommendation
    };
    this.setData({
      ClearFace: false,
      Moisturize: true,
      Essence: false,
    })
    setTimeout(() => {
      const chatRecords = this.data.chatRecords.concat(robotMessage);
      this.setData({
        chatRecords,
      });
      setTimeout(() => {
        this.setData({
          Moisturize_1: true,
        })
      }, 1000);
    }, 1000);
  },

  handleButtonClick3: function (event) {
    const buttonName = event.currentTarget.dataset.buttonName;
    const recommendation = `关于"${buttonName}"我有以下推荐：`;
    const robotMessage = {
      role: 'robotJingHua',
      content: recommendation
    };
    this.setData({
      ClearFace: false,
      Moisturize: false,
      Essence: true,
    })
    setTimeout(() => {
      const chatRecords = this.data.chatRecords.concat(robotMessage);
      this.setData({
        chatRecords,
      });
      setTimeout(() => {
        this.setData({
          Essence_1: true,
        })
      }, 1000);
    }, 1000);
  }

});