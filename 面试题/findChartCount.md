1 字符串查找每个字符出现的次数。

Array.prototype.charCount = function (str){
	str = str.replace(/\s/ig,"");//去除空格
	
	var strArr = str.split("");	
	var result = [],reg;
	
	for(var i =0;i<strArr.length;i++){
		if(str.indexof(strArr[i])!=-1){
			reg = new RegExp(strArr[i],"ig");
			counts = str.match(reg).length;
			str = str.replace(reg,"");
			result.push(strArr[i]+":"+counts);
		}
	}
	return result;
}