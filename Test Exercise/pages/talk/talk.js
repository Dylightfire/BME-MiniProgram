Page({
  data: {
    chatRecords: [],
    showComponent: false,
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
      if (index < robotMessages.length && index <= 2 ) {
        setTimeout(addMessage, 1000); // 1秒延时
      }
      if(index===2)
      {
        setTimeout(() => {
          this.setData({
            showComponent: true
          });
        }, 1000);
      }
    };
    setTimeout(addMessage, 1000); // 1秒延时开始添加机器人消息
  },




  handleButtonClick: function () {
    const robotMessage = {
      role: 'robot',
      content: '关于“洁面”我有以下推荐：'
    };
    const chatRecords = this.data.chatRecords.concat(robotMessage); 
    this.setData({
      chatRecords,
    });
  }

});