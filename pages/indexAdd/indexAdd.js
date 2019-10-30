// pages/indexAdd/indexAdd.js
Page({

  /**
   * 页面的初始数据
   */
  data:
  {
     index:""

  },

  onLoad(options)
  {
    var that = this
    that.setData({


      index:options.index
      

        

    })


  },

  formSubmit(e)
  {



    var that = this

    that.setData
    ({

      index:e.detail.value.index,
      name: e.detail.value.name

    })

   


   wx.redirectTo({
     url: '../index/index?index=' + e.detail.value.index + '&name=' + e.detail.value.name,
   })

  }


})