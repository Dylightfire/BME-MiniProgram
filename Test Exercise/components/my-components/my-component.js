// components/my-component.js
Component({
  data: {
    buttonName: '按钮'
  },

  methods: {
    handleTap: function () {
      this.triggerEvent('click');
    },

    updateValue: function (event) {
      const newValue = event.detail.newValue;
      this.setData({
        buttonName: newValue
      });
    }
  }
})
