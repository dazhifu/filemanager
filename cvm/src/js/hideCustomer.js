
$(function () {
	//年龄分步
	
	var age = document.getElementById('age');
	var myChartage = echarts.init(age);
	
//	var xData = function() {
//	    var data = [];
//	    for (var i = 1; i < 15; i++) {
//	        data.push(i + "月份");
//	    }
//	    return data;
//	}();
	
	option = {
	    backgroundColor: "#344b58",
	    "title": {
	        "text": "",
	        "subtext": "BY Wang Dingding",
	        x: "4%",
	
	        textStyle: {
	            color: '#fff',
	            fontSize: '22'
	        },
	        subtextStyle: {
	            color: '#90979c',
	            fontSize: '16',
	
	        },
	    },
	    "tooltip": {
	        "trigger": "axis",
	        "axisPointer": {
	            "type": "shadow",
	            textStyle: {
	                color: "#fff"
	            }
	
	        },
	    },
	    "grid": {
	        "borderWidth": 0,
	        "top": 110,
	        "bottom": 95,
	        textStyle: {
	            color: "#fff"
	        }
	    },
	    "legend": {
	        x: '4%',
	        top: '11%',
	        textStyle: {
	            color: '#90979c',
	        },
	        "data": ['女', '男','帅哥', '美女','平均']
	    },
	     
	
	    "calculable": true,
	    "xAxis": [{
	        "type": "category",
	        "axisLine": {
	            lineStyle: {
	                color: '#90979c'
	            }
	        },
	        "splitLine": {
	            "show": false
	        },
	        "axisTick": {
	            "show": false
	        },
	        "splitArea": {
	            "show": false
	        },
	        "axisLabel": {
	            "interval": 0,
	
	        },
//	        "data": xData,
			"data":	[
	                "湖南",
	                "湖北",
	                "重庆",
	                "北京",
	                "天津",
	                "上海",
	                1544,
	                3285,
	                5208,
	                3372,
	                2484,
	                4078
	            ]
	    }],
	    "yAxis": [{
	        "type": "value",
	        "splitLine": {
	            "show": false
	        },
	        "axisLine": {
	            lineStyle: {
	                color: '#90979c'
	            }
	        },
	        "axisTick": {
	            "show": false
	        },
	        "axisLabel": {
	            "interval": 0,
	
	        },
	        "splitArea": {
	            "show": false
	        },
	
	    }],
	    "dataZoom": [{
	        "show": true,
	        "height": 30,
	        "xAxisIndex": [
	            0
	        ],
	        bottom: 30,
	        "start": 10,
	        "end": 80,
	        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
	        handleSize: '110%',
	        handleStyle:{
	            color:"#d3dee5",
	            
	        },
	           textStyle:{
	            color:"#fff"},
	           borderColor:"#90979c"
	        
	        
	    }, {
	        "type": "inside",
	        "show": true,
	        "height": 15,
	        "start": 1,
	        "end": 35
	    }],
	    "series": [{
	            "name": "女",
	            "type": "bar",
	            "stack": "总量",
	            "barMaxWidth": 35,
	            "barGap": "10%",
	            "itemStyle": {
	                "normal": {
	                    "color": "rgba(48,252,96,1)",
	                    "label": {
	                        "show": true,
	                        "textStyle": {
	                            "color": "#fff"
	                        },
	                        "position": "insideTop",
	                        formatter: function(p) {
	                            return p.value > 0 ? (p.value) : '';
	                        }
	                    }
	                }
	            },
	            "data": [
	                709,
	                1917,
	                2455,
	                2610,
	                1719,
	                1433,
	                1544,
	                3285,
	                5208,
	                3372,
	                2484,
	                4078
	            ].sort(function(a,b){
	                return a-b;
	            }),
	        },
	
	        {
	            "name": "男",
	            "type": "bar",
	            "stack": "总量",
	            "itemStyle": {
	                "normal": {
	                    "color": "rgba(255,123,105,1)",
	                    "barBorderRadius": 0,
	                    "label": {
	                        "show": true,
	                        "position": "top",
	                        formatter: function(p) {
	                            return p.value > 0 ? (p.value) : '';
	                        }
	                    }
	                }
	            },
	            "data": [
	                327,
	                1776,
	                507,
	                1200,
	                800,
	                482,
	                204,
	                1390,
	                1001,
	                951,
	                381,
	                220
	            ].sort(function(a,b){
	                return a-b;
	            })
	        },
	        {
	            "name": "帅哥",
	            "type": "bar",
	            "stack": "总量",
	            "itemStyle": {
	                "normal": {
	                    "color": "rgba(58,185,183,1)",
	                    "barBorderRadius": 0,
	                    "label": {
	                        "show": true,
	                        "position": "top",
	                        formatter: function(p) {
	                            return p.value > 0 ? (p.value) : '';
	                        }
	                    }
	                }
	            },
	            "data": [
	                327,
	                1776,
	                507,
	                1200,
	                800,
	                482,
	                204,
	                1390,
	                1001,
	                951,
	                381,
	                220
	            ].sort(function(a,b){
	                return a-b;
	            })
	        }, {
	            "name": "美女",
	            "type": "bar",
	            "stack": "总量",
	            "itemStyle": {
	                "normal": {
	                    "color": "rgba(50,223,152,1)",
	                    "barBorderRadius": 0,
	                    "label": {
	                        "show": true,
	                        
	                        
	                        "position": "top",
	                        formatter: function(p) {
	                            return p.value > 0 ? (p.value) : '';
	                        }
	                    }
	                }
	            },
	            "data": [
	                327,
	                1776,
	                507,
	                1200,
	                800,
	                482,
	                204,
	                1390,
	                1001,
	                951,
	                381,
	                220
	            ].sort(function(a,b){
	                return a-b;
	            })
	        },
	        {
	            "name": "总数",
	            "type": "line",
	            "stack": "总量",
	            symbolSize:10,
	            symbol:'circle',
	            "itemStyle": {
	                "normal": {
	                    "color": "rgba(252,230,48,1)",
	                    "barBorderRadius": 0, 
	                    "label": {
	                        "show": true,
	                        "position": "top",
	                        formatter: function(p) {
	                            return p.value > 0 ? (p.value) : '';
	                        }
	                    }
	                }
	            },
	            "data": [
	                1036,
	                3693,
	                2962,
	                3810,
	                2519,
	                1915,
	                1748,
	                4675,
	                6209,
	                4323,
	                2865,
	                4298
	            ].sort(function(a,b){
	                return a-b;
	            })
	        },
	    ]
	}
	if (option && typeof option === "object") {
		myChartage.setOption(option, true);
	}
	
	
	//预购车型Top
	var buy = document.getElementById('carBuy');
	var myChartbuy = echarts.init(buy);
	optionbuy = {
//	    title: {
//	        text: '堆叠区域图'
//	    },
	    tooltip : {
	        trigger: 'axis'
	    },
//	    legend: {
//	        data:['搜索引擎'],
//	        textStyle:{
//	        	color:"#fff"
//	        }
//	    },
	    toolbox: {
	        feature: {
	            saveAsImage: {}
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['类目1','类目2','类目3','类目4','类目5','类目6','类目7','类目8','类目9','类目10']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            
	        }
	    ],
	    textStyle:{
	    	color:"#fff"
	    },
	    series : [
	        {
	            name:'预购车型',
	            type:'line',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            areaStyle: {normal: {
	            	color:"rgba(246,131,38,0.2)",
//	            	shadowColor: 'rgba(0, 0, 0, 0.5)',
// 					shadowBlur: 10	
	            }},
	            data:[820, 932, 901, 934, 190, 830, 720,901, 1934, 1290].sort(function(a,b){
	            	return a-b;
	            }).reverse()
	        }
	    ]
	};
	if (optionbuy && typeof optionbuy === "object") {
			myChartbuy.setOption(optionbuy, true);
		}
	
	
	//出行方式
	var walk = document.getElementById('carWalk');
	var myChartwalk= echarts.init(walk);
	optionwalk = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data:['火车','打车','私家车','专车','绿色出行']
	    },
	    series: [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius: ['50%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '30',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:335, name:'火车'},
	                {value:310, name:'打车'},
	                {value:234, name:'私家车'},
	                {value:135, name:'专车'},
	                {value:1548, name:'绿色出行'}
	            ]
	        }
	    ]
	};
   if (optionwalk && typeof optionwalk === "object") {
			myChartwalk.setOption(optionwalk, true);
		}    
		
	//汽车出行Top
	var run = document.getElementById('carRun');
	var myChartrun = echarts.init(run);
	optionrun = {
//	    title: {
//	        text: '堆叠区域图'
//	    },
	    tooltip : {
	        trigger: 'axis'
	    },
//	    legend: {
//	        data:['搜索引擎'],
//	        textStyle:{
//	        	color:"#fff"
//	        }
//	    },
	    toolbox: {
	        feature: {
	            saveAsImage: {}
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['类目1','类目2','类目3','类目4','类目5','类目6','类目7','类目8','类目9','类目10']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	        }
	    ],
	    textStyle:{
	    	color:"#fff"
	    },
	    series : [
	        {
	            name:'预购车型',
	            type:'line',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            areaStyle: {normal: {
	            	color:"rgb(88,253,255)",
//	            	shadowColor: 'rgba(0, 0, 0, 0.5)',
// 					shadowBlur: 10	
	            }},
	            data:[820, 932, 901, 934, 190, 830, 720,901, 1934, 1290].sort(function(a,b){
	            	return a-b;
	            }).reverse()
	        }
	    ]
	};
	if (optionrun && typeof optionrun === "object") {
			myChartrun.setOption(optionrun, true);
		}
	//汽车资讯Top
	var ask = document.getElementById('carAsk');
	var myChartask = echarts.init(ask);
	optionask = {
//	    title: {
//	        text: '堆叠区域图'
//	    },
	    tooltip : {
	        trigger: 'axis'
	    },
//	    legend: {
//	        data:['搜索引擎'],
//	        textStyle:{
//	        	color:"#fff"
//	        }
//	    },
	    toolbox: {
	        feature: {
	            saveAsImage: {}
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['类目1','类目2','类目3','类目4','类目5','类目6','类目7','类目8','类目9','类目10']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	        }
	    ],
	    textStyle:{
	    	color:"#fff"
	    },
	    series : [
	        {
	            name:'预购车型',
	            type:'line',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            areaStyle: {normal: {
	            	color:"rgb(70,255,61)",
//	            	shadowColor: 'rgba(0, 0, 0, 0.5)',
// 					shadowBlur: 10	
	            }},
	            data:[820, 932, 901, 934, 190, 830, 720,901, 1934, 1290].sort(function(a,b){
	            	return a-b;
	            }).reverse()
	        }
	    ]
	};
	if (optionask && typeof optionask === "object") {
			myChartask.setOption(optionask, true);
		}
	
	//电商频道
	var sell = document.getElementById('carSell');
	var myChartsell= echarts.init(sell);	
	var xAxisData = [];
	var data = [];
	for (var i = 9; i < 16; i++) {
	    xAxisData.push('5月' + i + '日');
	    data.push(Math.round(Math.random() * 500) + 200);
	}
	optionsell = {
	    title: {
	        text: '柱状图示例',
	        subtext: 'https://segmentfault.com/q/1010000005137138',
	        sublink: 'https://segmentfault.com/q/1010000005137138'
	    },
	    xAxis: [{
	        data: xAxisData,
	        axisLabel: {
	            textStyle: {
	                color: '#03a9f4'
	            }
	        },
	        splitLine: {
	            show: false
	        }
	    }, {
	        // 辅助 x 轴
	        show: false,
	        data: xAxisData  
	    }],
	    yAxis: {
	        max: 1000,
	        axisLine: {
	            show: false
	        }
	    },
	    series: [{
	        // 辅助系列
	        type: 'bar',
	        silent: true,
	        xAxisIndex: 1,
	        itemStyle: {
	            normal: {
	                barBorderRadius: 20,
	                color: '#ddd'      
	            }
	        },
	        barWidth: 40,
	        data: data.map(function (val) {
	            return 1000;
	        })
	    }, {
	        type: 'bar',
	        data: data,
	        barWidth: 40,
	        itemStyle: {
	            normal: {
	                barBorderRadius: 20,
	                color: '#03a9f4',
	                shadowColor: 'rgba(0, 0, 0, 0.4)',
	                shadowBlur: 20
	            }
	        }
	    }]
	};
	if (optionsell && typeof optionsell === "object") {
			myChartsell.setOption(optionsell, true);
		}  
	//出行方式
	var walk = document.getElementById('carWalk');
		var myChartwalk= echarts.init(walk);
		optionwalk = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        data:['火车','打车','私家车','专车','绿色出行']
		    },
		    series: [
		        {
		            name:'访问来源',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {value:335, name:'火车'},
		                {value:310, name:'打车'},
		                {value:234, name:'私家车'},
		                {value:135, name:'专车'},
		                {value:1548, name:'绿色出行'}
		            ]
		        }
		    ]
		};
	   if (optionwalk && typeof optionwalk === "object") {
				myChartwalk.setOption(optionwalk, true);
			}  	
		
	window.onresize = myChartsell.resize; 
	window.onresize = myChartage.resize; 
	window.onresize = myChartwalk.resize; 
})