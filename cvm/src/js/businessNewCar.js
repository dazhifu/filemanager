//新车上牌
$(function () {
	//上牌月份分析
	var xData = function() {
		var data = [];
		for (var i = 1; i < 12; i++) {
			data.push(i + "月份");
		}
		return data;
	}();
	var local = document.getElementById('local');
	var myChartlocal = echarts.init(local);
	var option = {
		backgroundColor: "#47474a",
		"title": {
			"text": "",
			"subtext": "",
			x: "4%",

			textStyle: {
				color: '#fff',
				fontSize: '22'
			},
			subtextStyle: {
				color: '#90979c',
				fontSize: '16',

			},
		},                                     //title   end
		"tooltip": {
			"trigger": "axis",
			"axisPointer": {
				"type": "shadow",
				textStyle: {
					color: "#fff"
				}

			},
		},                                                           // tooltip    end
		"grid": {
			"borderWidth": 0,
			"top": 110,
			"bottom": 95,
			textStyle: {
				color: "#fff"
			}
		},                                                             // grid  end
		"legend": {
			x: '4%',
			top: '11%',
			textStyle: {
				color: '#90979c',
			},
			"data": ['上半月', '下半月']
		},                                                                  //legend    end


		"calculable": true,
		xAxis: [{
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
			data:[],        //  ['一月份','二月份'。。。]
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
		series: [{
			"name": "上半月",
			"type": "bar",
			"stack": "总量",
			"barMaxWidth": 35,
			"barGap": "10%",
			"itemStyle": {
				"normal": {
					"color": "rgba(255,144,128,1)",
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
			data: [],
		},

			{
				"name": "下半月",
				"type": "bar",
				"stack": "总量",
				"itemStyle": {
					"normal": {
						"color": "rgba(0,191,183,1)",
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
				data: []
			}, {
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
				data: []
			},
		]
	}
	if (option && typeof option === "object") {
		myChartlocal.setOption(option, true);
	}
	myChartlocal.showLoading();
	$.get("mock/businessNewCar.json",function(result){
		myChartlocal.hideLoading();//数据加载完成隐藏
		var oncard = result.oncard;
		var month = [];
		var firsthalf = [];
		var lasthalf = [];
		var dataMonth = oncard.slice(1);
		for(let i in dataMonth){
			month.push(dataMonth[i][0]);
			firsthalf.push(dataMonth[i][1]);
			lasthalf.push(dataMonth[i][2]);
		}
		option.xAxis[0].data = month;
		option.series[0].data = firsthalf;
		option.series[1].data = lasthalf;
		var total = new Array(12);
		for(let j = 0;j<=total.length-1;j++){
			total[j] = firsthalf[j] + lasthalf[j];
		}
		option.series[2].data = total;
		myChartlocal.setOption(option, true);
	});
	//上牌区域分析
	var area = document.getElementById('area');
	var myChartarea = echarts.init(area);
	var value = [5,8,12,14,16,18,20,22,24,26,30];
	var option1 = {
		backgroundColor: '#333',
		title: {
			text: '上牌区域阶梯数据值',
			x: 'center',
			textStyle: {
				color: '#fff'
			}
		},
		tooltip: {
			trigger: 'item'
		},
		dataRange: {
			show: false,
			min : 0,
			max : 12,
			calculable : true,
			color: ['#4e9fb6','#dc744f','#50a3ba','#eac736','#d94e5d'],
			y:'center',
		},

		xAxis: [
			{
				type: 'category',
				show: false,
				data: []
			}
		],
		yAxis: [
			{
				type: 'value',
				show: false
			}
		],
		series: [
			{
				name: '车辆上牌统计',
				type: 'bar',
				barGap: 0.1,
				barCategoryGap: 0.01,
				itemStyle: {
					normal: {
						color: function(params) {
							// build a color map as your need.
							var colorList = [
								'#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
								'#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
								'#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
							];
							return colorList[params.dataIndex]
						},
						label: {
							show: true,
							position: 'top',
							formatter: '{b}\n{c}'
						},
						shadowBlur: 80,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				},
				data:[]
			}
		]
	};
	if (option1 && typeof option1 === "object") {
		myChartarea.setOption(option1, true);
	}
	myChartarea.showLoading();
	$.get("mock/businessNewCar.json",function(result){
		myChartarea.hideLoading();//数据加载完成隐藏
		var area = result.area;
		var city = [];
		var data = [];
		for(var i in area){
			city.push(area[i][0]);
			data.push(area[i][1]);
		}
		option1.xAxis[0].data = city;
		option1.series[0].data = data;
		myChartarea.setOption(option1, true);
	});

})