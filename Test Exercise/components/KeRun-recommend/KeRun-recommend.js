Component({
  data: {
    buttonName: '珂润'
  },

  methods: {
    handleTap: function () {
      this.triggerEvent('click');
    },

  }
})