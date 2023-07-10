Component({
  data: {
    buttonName: '芙丽芳丝'
  },

  methods: {
    handleTap: function () {
      this.triggerEvent('click');
    },

  }
})