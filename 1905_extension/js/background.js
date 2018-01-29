





chrome.browserAction.onClicked.addListener(function(){ });

var globalMsg = "";
/*chrome.extension.onRequest(function(message,sender,sendResponse){ 
	alert(message.type)
	sendResponse(message);
	postDatas(message.type)
})*/
// onMessageExternal
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){ 
	alert(2222)
	alert(message)
	sendResponse(message);
	postDatas(message)
}); 



function postDatas(msg){
		var xhr;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		var formData = new FormData();
		formData.append("dom", msg);
		xhr.open("post","http://www.1905.com/api/mdb/router.php?m=gjdyzjb&a=index",true);
		xhr.send(formData);
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					var datas = JSON.parse(xhr.responseText);
					//alert('datas:'+datas.code)
					if(datas.code == 200){
						alert(datas.msg);
						alert('url：'+datas.info.url);
						window.open(datas.info.url,"_blank");
					}else{
						alert('请刷新页面，然后再次点击扩展图标，以获取数据！')
					}
				}
			}
		}
	};



