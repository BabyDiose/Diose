/*
	浏览器分为支持type＝color属性和不支持type＝“color”属性
	浏览器在确定支持type＝color属性的同时还需要确定是否会显示一个颜色选择小部件
*/
function hasColorSupport(){
	/*
	浏览器分为支持type＝color属性和不支持type＝“color”属性
	*/
	element = document.createElement("input");
	element.setAttribute("type","color");
	var hasColorType = (element.type === "color");
	
	if(hasColorType){
		/*
			浏览器在确定支持type＝color属性的同时还需要确定是否会显示一个颜色选择小部件.
			方法：为该元素设置一个value，判断是否设置成功。因为输入字段的行为并不像文本字段那样。
				如果 设置不成功，则证明该浏览器已经实现了颜色选择器。
		*/
		var testString = "foo";
		element.value = testString;
		hasColorType = (element.value != testString);
	}
	return (hasColorType);
}

var applyColorPicker = function(){
	$("input[type=color]").simpleColor();
};

if(!hasColorSupport()){
	var script = document.createElement('script');
	script.src = "jquery.simple-color.js";
	
	if(script.readyState){ 
		// for IE
		script.onreadystatechange = function(){
			if(this.readystate == "loaded" || this.readyState === "complete"){
				script.onreadystatechange = null;
				applyColorPicker();
			}
		};
	}else{
		script.onload = applyColorPicker;
	}
	document.getElementsByTagName("head")[0].appendChild(script);
}

if(!Modernizr.autofocus){
	$('input[autofocus]').focus();
}

var applyPlaceholders = function(){
	$('input').placeholder();
};

Modernizr.load({
	test:Modernizr.placeholder,
	nope:"jquery.placeholder.js",
	callback: function(url,result){
		if(!result){
			applyPlaceholders(
				
			);
		}
	}
});

// 利用hf5实现
var configureHSF = function(){
	H5F.setup(document.getElementById("create_account"));
};

Modernizr.load({
	// 激活hf5
	test:Modernizr.pattern && Modernizr.required,
	nope:h5f.min.js,
	callback:function(url,result){
		if(!result){
			configureHSF();
		}
	}
});


