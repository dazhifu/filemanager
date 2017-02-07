window.onload=function(){
		var link="";
		//判断设备并设置下载链接
		(function(){
			if(IsIOS()){
				var icon = document.getElementById("icon-android");
					icon.className="icon-ios";
	               var softwareVersion = document.getElementById("softwareVersion");
					softwareVersion.innerText="0.2.1 (Build 201) - 8.91 MB";
					     var datePublished = document.getElementById("datePublished");
					datePublished.innerText="2016-09-01 11:24";

				link ="itms-services://?action=download-manifest&url=https://dazhifu.github.io/filemanager/jyfxpt/app/jyfxpt.plist";
			}else{

				  var softwareVersion = document.getElementById("softwareVersion");
					softwareVersion.innerText="0.2.1 (Build 201) - 29.91 MB";
					     var datePublished = document.getElementById("datePublished");
					datePublished.innerText="2016-09-01 11:24";

				link ="https://dazhifu.github.io/filemanager/jyfxpt/app/jyfxpt.apk";
			}
		}())
		var btn = document.getElementById("btn");
		//点击下载文件 更改样式
		btn.onclick=function (){
			if(isWeiXin()){
				document.documentElement.scrollTop = document.body.scrollTop =0;
				document.getElementById("hide").style.display ="block";
				document.getElementById("main").style.top="180px";
			}else{
				btn.innerHTML="";
				btn.style.borderBottom="0px";
				btn.style.borderLeft="0px";
				btn.style.webkitAnimation = "change 1s linear infinite";
				btn.style.width="42px";
				btn.href=link;
				//ios字体提示
				if(IsIOS()){
					setTimeout(function(){
						btn.style.webkitAnimation ="";
						btn.style.border="none";
						btn.style.borderRdius="";
						btn.style.width="220px";
						btn.style.color ="blue";
						btn.innerHTML="正在安装，请按Home键在桌面查看";
					},5000)
				}
				
			}
			btn.onclick="";	
			//console.log(111);
		}
		//是否使用微信打开
		function isWeiXin(){
			var ua = window.navigator.userAgent.toLowerCase();
		    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
		        return true;
		    }else{
		        return false;
		    }
		}
		//判断是否是ios
		function IsIOS() {
		    var ua = navigator.userAgent.toLowerCase();
		    if (ua.match(/iPhone\sOS/i) == "iphone os") {
		        return true;
		    } else if(ua.match(/(iPhone|iPod|iPad)/i)){
		    	return true;
		    }else {
		        return false;
		    }
		}
	}