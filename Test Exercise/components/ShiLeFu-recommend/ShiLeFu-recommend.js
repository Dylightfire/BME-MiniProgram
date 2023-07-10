Component({
  data: {
    buttonName: '适乐肤'
  },

  methods: {
    handleTap: function () {
      this.triggerEvent('click');
    },

  }
})