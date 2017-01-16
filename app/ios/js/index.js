window.onload=function(){
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
				btn.href="itms-services://?action=download-manifest&url=https://dazhifu.github.io/filemanager/app/ios/jyfxpt.plist";
				//定时器更改样式
				setTimeout(function(){
					btn.style.webkitAnimation ="";
					btn.style.border="none";
					btn.style.borderRdius="";
					btn.style.width="220px";
					btn.style.color ="blue";
					btn.innerHTML="正在安装，请按Home键在桌面查看";
				},5000)
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
		
	}
	
	
