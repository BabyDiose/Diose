关于ajax

第一： 头文件
第二：原生ajax（）

创建xhr 对象:
var xmlhttp;
var tet,x;
if(window.XMLHttpRequest){
//code for IE7+,ff,chrome.opera,safari
	xmlhttp = new XMLHttpRequest();
 }else{
//code for IE6,IE5
	xmlhttp = new ActiveXObject(“Microsoft.XMLHTTP");
 }
xmlhttp.onreadystatechange = function (){
	if(xmlhttp.readystate == 4 && xmlhttp.status = 200){
	xmlDoc = xmlhttp.responseXML;
	txt = “”;
	x = xmlDoc.getElementByTagName(“title”);
	for(var i = 0;i<x.length;i++){
		txt = txt +x[i].childNodes[0].nodeValue + “<br/“;
	 }
	document.getElement.BYId(“myDiv”).innerHTML = txt;
 	}
 }
创建xhr请求
xmlhttp.open(“GET”,”test1.txt,true”);
xmlhttp.send();

关于open(method,url,async)
send()

xhr响应


第三：jQuery ajax()

1 . jquery ajax 请求
$.ajax(url,[settings])
settings:
such as: 
	accepts:
	async
	beforeSend()
	cache
	complete(xhr,ts)
	contents
	dataType:xml,json.,jsonp,html.text,html
	statusCode

	2.	jquery ajax 事件
ajaxComplete()
ajaxStart()
ajaxEnd()
ajaxStop()
ajaxError()
ajaxSuccess()
