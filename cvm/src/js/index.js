$(function(){
	
	var myChartlocal = echarts.init(local);	


function geotest(){
	var geo;
	$.ajax({
		url:"mock/indexGeo.json",
		async:false,
		data:"table",
		type:'get',
		success:function(result){
			//console.log(result);
			geo =result.table;
		}
	})
	//console.log(geo);
	return geo;
}
setTimeout(function(){
		$.get("mock/indexData.json",function(result){
		//console.log(result);
			myChartlocal.hideLoading();//数据加载完成隐藏
			 var temp= result.table;
			// console.log(temp);
			 var data=[];
			 for(var i in temp) {
			 	//console.log(i);
				 var item = {};
				 item.name = temp[i][1];
				 item.value = temp[i][3];
				 //console.log(item);
				 data.push(item);
				// res.push(temp[i][0]);
				
			 }
			//console.log(data);
		    option.series[0].data = convertData(data);
		    option.series[1].data =convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6))
		    myChartlocal.setOption(option, true);
	})
	},1000);
var geoCoordMap = geotest();
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
        
    }
    //console.log(res); //[{name,[1,2,3]},{name,[1,2,3]}]
    return res;
};

option = {
//  backgroundColor: '#404a59',
//  title: {
//      text: '全国主要城市空气质量',
//      subtext: 'data from PM25.in',
//      sublink: 'http://www.pm25.in',
//      left: 'center',
//      textStyle: {
//          color: '#fff'
//      }
//  },
    tooltip : {
    	
        trigger: 'item',
//      formatter: function (params) {
//          return params.name + ' : ' + params.value[2];
//      }
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
//      data:['pm2.5'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,//开启滚轮
        itemStyle: {
            normal: {
                areaColor: '#2F3136',//背景色
                borderColor: '#48484B'//边框色
            },
            emphasis: {
                areaColor: '#2a333d'//鼠标停在地图省份颜色显示
            }
        }
    },
    series : [
        {
            name: '销量',
            type: 'scatter',//圆形
            coordinateSystem: 'geo',//坐标系
            data: '',
            symbolSize: function (val) {
            	//console.log(val);
                return val[2] / 10;//波浪纹
            },
            label: {
                normal: {
                    formatter: '{b}', 
                    position: 'right', //居右
                    show: false//城市名字,
                    
                },
                emphasis: {
                    show: true //hover 显示城市
                }
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'//颜色圆形小点
                }
            }
           
        },
        {
            name: '热门城市 Top 5',
            type: 'effectScatter', //波点图
            coordinateSystem: 'geo',//坐标系
            data: '',
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};
	
	myChartlocal.showLoading();//数据加载中 待数据加载完成设置消失效果                
	if (option && typeof option === "object") {
	    myChartlocal.setOption(option, true);
	    
	    //myChartlocal.hideLoading();//数据加载完成隐藏
	}	
	
	window.onresize = myChartlocal.resize;//跟着变化

})
