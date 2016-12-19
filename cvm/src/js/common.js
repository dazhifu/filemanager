//var APIDOMAIN = 'http://tap1.capitalvue.com';
//var APIDOMAIN = 'http://10.254.251.83';
var APIDOMAIN = 'http://210.21.237.135:9091/mobile/zshproxy';
// var APIDOMAIN = 'http://xydlc.newone.com.cn:9012/mobile/zshproxy';
//var APIDOMAIN = '/mobile/zshproxy';

var disableOTC = false;
window.GLOBAL_CONFIG = {
	interface: '==mock==', // mock, test, production
	isNative: '--no--'
}



	console.log('ajaxDownloadtttt',GLOBAL_CONFIG.interface);
		if (/test/.test(GLOBAL_CONFIG.interface)) {             //根据测试环境（test）还是生产环境（product）的正则判断来配置IP   现在没有用到
			var APIDOMAIN = 'http://210.21.237.135:9091/mobile/zshproxy';
			var disableOTC = false;
		} else if (/production/.test(GLOBAL_CONFIG.interface)) {
			var APIDOMAIN = 'https://yhtlc.newone.com.cn:8989/mobile/zshproxy';
			var disableOTC = true;
		} else {
			APIDOMAIN = '';                      				 //  现在返回的APIDOMAIN是空字符串
		}

	



var ajaxDownload = function(url, params, callback, callbackArgs){
	if (params == null) params = {};
	params = {url: url + '?' + $.param(params)};           //  将对象序列化

if (/mock/.test(GLOBAL_CONFIG.interface)) {           //这个返回TRUE
	var aa=url.split("/");

	var file = aa[aa.length-1];                //最后一个文件

		APIDOMAIN = '/mock/' + file + '.json'

	}

	console.log('ajaxDownload',APIDOMAIN)
	$.ajax({
		url: APIDOMAIN,
		data: params,
		dataType: 'json',
		error: function (XMLHttpRequest, textStatus, errorThrown){
    // 错误处理
    },
    success: function(response){
    	if(response.sys_status == 200){
    		if(callback){
    			callback(response, callbackArgs)
    		}
    	}
		}
	});
};




var array2Object = function(col, row){
	//var result = {};
	var result =  new Array();
	for(var i in col){
		if(col.hasOwnProperty(i) == false){            //不是自身的属性就continue  跳过
			continue
		}
		name = col[i];                          //竖列
		val = row[i];                           //横排
		result[name] = val == null ? "" : val;
	}
	return result
};



array2Object


