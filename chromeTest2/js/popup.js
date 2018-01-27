


 







var imgURL = chrome.extension.getURL(window.location.href);
//alert(imgURL)//chrome-extension://dnhllippggcpenpmfodnblcflhpcplla/http://www.gjdyzjb.cn/index.html#/generalBusiness/cinemaManagement/cinemaInfoModify/check.html?id=10721

//alert(window.location.host)
if(window.location.href=="http://www.gjdyzjb.cn/index.html#/generalBusiness/cinemaManagement/cinemaInfoModify/check.html?id=10721"){
  var docElement = document.documentElement;
  var btn = document.createElement("input")
  $("body").append("<input type='button' value='提交' id='clickBtn'>");
  $("#clickBtn").css({
    "width":"100px",
    "height":"32px",
    "background-color":"#67A3D6",
    "position":"absolute",
    "right":"100px",
    "top":"170px",
    "color":"#fff",
    "border":"none"
  });
  var w_width = $(window).width();
  $(window).resize(function(){
    if(w_width >= 827 && w_width <= 991){
      $("#clickBtn").css("top","192px")
    }else if(w_width >= 794 && w_width <= 825){
      $("#clickBtn").css("top","216px")
    }else if(w_width <= 793){
      $("#clickBtn").css("top","245px")
    }
  })
  $("#clickBtn").click(function(){
    $(this).attr('disabled',true).css('background-color','#b2adad')
    setTimeout(function(){
      if($('.panel-body').length==1){
        var $cons = $('.panel-body').html();
        chrome.runtime.sendMessage($cons,function(response){
       
        });
      }
    },1000)
  })

}


























