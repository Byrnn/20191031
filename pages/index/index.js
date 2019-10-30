var li  = [];
var index = 0 ; 

Page({

  data: 
  {

    list:li

  },


  onLoad:function(options)
  {
    
   
    var sign = options.sign;

    


    li.push
    ({

        index:index++,
        name: options.name

    })



    var that = this;

    that.setData
    ({
        list:li

    })

    

  },

  add()
  {

      wx.redirectTo({
        url: '../indexAdd/indexAdd?index='+index,
      })

  }



  

})