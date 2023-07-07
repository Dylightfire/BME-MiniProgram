// components/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    max: {
      type: Number,
      value: 10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0,
    n1: 0,
    n2: 0,
    sum: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount() {
      if (this.data.count >= this.properties.max){
        this.setData({
          count: -1
        })
      }
      this.setData({
        count: this.data.count + 1
      })
      this._showCount()
    },

    _showCount(){
      wx.showToast({
        title: 'count是' + this.data.count,
      })
    },

    addCount1(){ this.setData({ n1: this.data.n1 + 1 }) },
    addCount2(){ this.setData({ n2: this.data.n2 + 1 }) }
  },

  observers: {
    'n1, n2': function(newn1, newn2){
      this.setData({ sum: newn1 + newn2 })
    }
  }


})
