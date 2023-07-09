Page({
  data: {
    chatRecords: [],
    showComponent: false,
    buttonNames: ['洁面', '保湿', '精华'],
    ClearFace: false,
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




  handleButtonClick: function (event) {
    const buttonName = event.currentTarget.dataset.buttonName;
    const recommendation = `关于"${buttonName}"我有以下推荐：`;
    
    const robotMessage = {
      role: 'robot',
      content: recommendation
    };

    this.setData({
      ClearFace: true,
    })
  
    const chatRecords = this.data.chatRecords.concat(robotMessage);
    this.setData({
      chatRecords,
    });
  }
  

});