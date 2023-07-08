Page({
  data: {
    chatRecords: [],
  },

  onLoad: function () {
    // 延时添加机器人消息
    this.addRobotMessageWithDelay();
  },

  addRobotMessageWithDelay: function () {
    const robotMessages = [
      '欢迎来到我的商店！',
      '有什么我能帮你的嘛？',
      '关于“洁面”我有以下推荐：',//index=3
      '关于“保湿”我有以下推荐：',//index=4
      '关于“精华”我有以下推荐：'//index=5
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
      if (index < robotMessages.length && index < 2 ) {
        setTimeout(addMessage, 1000); // 1秒延时
      }
    };
    setTimeout(addMessage, 1000); // 1秒延时开始添加机器人消息
  },
});