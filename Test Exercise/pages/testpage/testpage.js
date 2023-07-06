// pages/testpage/testpage.js
var bmap = require('../../libs/bmap-wx.js'); 
Page({ 
    data: { 
        weatherData: '' 
    }, 
    onLoad: function() { 
        var that = this; 
        // 新建百度地图对象 
        var BMap = new bmap.BMapWX({ 
            ak: 'gTfapswyAh3Sa813m65y2H13mFAnDsR4' 
        }); 
        var fail = function(data) { 
            console.log(data) 
        };
      }
})