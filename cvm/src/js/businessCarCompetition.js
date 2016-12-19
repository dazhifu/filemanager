$(function(){
	var online = document.getElementById("online");
	var myChartlocal = echarts.init(online);
	var dataBJ = [
	    [267,216,280,4.8,108,64,9]          //数据值
	];
	var lineStyle = {
	    normal: {
	        width: 2,
	        color:"#435566",
	        opacity: 0.8 						//雷达图边色
	    }
	};
		

option = {
 //backgroundColor: '#f2f2f2',
    title: {
        text: '线上竞品分析',
        left:'center',
        bottom: 50,
        textStyle: {
            color: '#eee',
            fontSize:18
        }
    },
//  legend: {
//      top: 5,
//      left:20,
//      data: ['北京'],
//      itemGap: 20,
//      textStyle: {
//          color: '#fff',
//          fontSize: 14
//      },
//      selectedMode: 'single'
//  },
//     visualMap: {
//         show: true,
//         min: 0,
//         max: 20,
//         dimension: 6,
//         inRange: {
//             colorLightness: [0.5, 0.8]
//         }
//     },
    radar: {
        indicator: [], //更改数据获取数据
        shape: 'circle',               //圆形图像 默认方形
        center : ['50%', '45%'], //图的大小位置设置
        radius : '60%',
        splitNumber: 5,         //圆圈间距
        name: {
            textStyle: {
               // color: 'rgb(238, 197, 102)' //字体颜色
               color:"#fff",
               fontSize:16
            }
        },
        splitLine: {
            lineStyle: {
            	width:2,
                color: [
                    'rgba(250,250,250, 0.1)', 'rgba(250,250,250, 0.2)',
                    'rgba(250,250,250, 0.4)', 'rgba(250,250,250, 0.6)',
                    'rgba(250,250,250, 0.8)', 'rgba(250,250,250, 0.8)'
                    //颜色由深入浅色
              ].reverse() //顺序打反
            }
        },
        splitArea: {
        	areaStyle: {
                    color: ['rgba(82,207,61, 0.2)',
                    'rgba(82,207,61, 0.4)', 'rgba(82,207,61, 0.6)',
                    'rgba(82,207,61, 0.8)', 'rgba(82,207,61, 1)'],
                    shadowColor: 'rgba(250, 250, 250, 1)',
                    shadowBlur: 1
                }
        	//圆形背景色
           // show: true 
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: '北京',          //不需要
            type: 'radar',
            tooltip: {},          //鼠标在图形的显示值
            lineStyle: lineStyle,     //头部定义样式
            data: dataBJ,         //作出修改数据处理
            //symbol: 'none',
            symbolSize:4,        //最大值的圆形焦点
            itemStyle: {
                normal: {
                    color: '#fff'      //中间透明阴影颜色
                }
            },
            areaStyle: {
                normal: {
//                  opacity: 0.1
					opacity:0.6        //中间阴影透明度
                }
            }
        }
    ]
};
	myChartlocal.showLoading();//数据加载中 待数据加载完成设置消失效果    
	$.ajax({
			url:"mock/businessPK.json",
			type:"get",
			async:false,
			success:function(result){
				myChartlocal.hideLoading();//数据加载完成隐藏
				option.radar.indicator = result.table;
				console.log(option.radar.indicator)
				myChartlocal.setOption(option, true);
			}
	});
	if (option && typeof option === "object") {
	    myChartlocal.setOption(option, true);
	   // myChartlocal.hideLoading();//数据加载完成隐藏
	}
	window.onresize = myChartlocal.resize;//跟着变化

})
//第二个图像
$(function(){
	
	var myChartlocal = echarts.init(buy);

	var lineStyle = {
	    normal: {
	        width: 2,
	        color:"#435566",
	        opacity: 0.8
	    }
	};

	option = {
	    title: {
	        text: '填单客户购买车型',
	        left: 'center',
	        bottom:50,
	        textStyle: {
	            color: '#eee',
	            fontSize:18
	        }
	    },
	//  legend: {
	//      bottom: 5,
	//      data: ['上海'],
	//      itemGap: 20,
	//      textStyle: {
	//          color: '#fff',
	//          fontSize: 14
	//      },
	//      selectedMode: 'single'
	//  },
	    // visualMap: {
	    //     show: true,
	    //     min: 0,
	    //     max: 20,
	    //     dimension: 6,
	    //     inRange: {
	    //         colorLightness: [0.5, 0.8]
	    //     }
	    // },
	    radar: {
	        indicator: [],
	        shape: 'circle',
	        splitNumber: 5,
	        center : ['50%', '45%'], //图的大小位置设置
	        radius : '60%',
	        name: {
	            textStyle: {
	                color: 'rgb(238, 197, 102)',
	                fontSize:16
	            }
	        },
	        splitLine: {
	            lineStyle: {
	                color: [
	                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
	                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
	                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
	                ].reverse()
	            }
	        },
	        splitArea: {
	        	areaStyle: {
	                    color: ['rgba(215,121,64, 0.2)',
		                    'rgba(215,121,64, 0.4)', 'rgba(215,121,64, 0.6)',
		                    'rgba(215,121,64, 0.8)', 'rgba(215,121,64, 1)'],
	                    shadowColor: 'rgba(250, 250, 250, 1)',
	                    shadowBlur: 1
	                }
	        	//圆形背景色
	           // show: true 
	        },
	        axisLine: {
	            lineStyle: {
	                color: 'rgba(238, 197, 102, 0.5)'
	            }
	        }
	    },
	    series: [
	        {
	            name: '上海',
	            type: 'radar',
	            tooltip: {
	                trigger: 'item'
	            },
	            lineStyle: lineStyle,
	            data: [],
	            //symbol: 'none',
	            itemStyle: {
	                normal: {
	                    color: '#fff'
	                }
	            },
	            areaStyle: {
	                normal: {
	                    opacity: 0.6
	                }
	            }
	        }
	    ]
	};
	myChartlocal.showLoading();//数据加载中 待数据加载完成设置消失效果  
	$.ajax({
			url:"mock/businessPK.json",
			type:"get",
			async:false,
			success:function(result){
				 myChartlocal.hideLoading();
				option.radar.indicator = result.table;
				option.series[0].data =result.value;
				//console.log(option.radar.indicator)
				 myChartlocal.setOption(option, true);
			}
	});
		              
	if (option && typeof option === "object") {
	    myChartlocal.setOption(option, true); 
//	    myChartlocal.hideLoading();//数据加载完成隐藏
	}	
	window.onresize = myChartlocal.resize;//跟着变化
})