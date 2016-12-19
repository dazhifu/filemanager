$(function(){
	//性别分布饼图
	var myChartlocalsex = echarts.init(sex);
	var option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data:[],
			textStyle:{
				color: '#fff'
			}
	    },
	    series: [
	        {
	            name:'性别分布',
	            type:'pie',
//	            selectedMode: 'single',
//	            radius: [0, '30%'],
	
	            label: {
	                normal: {
	                    position: 'inner'
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[]
	        }
	    ],
		color: ['#487480','#ff7a51']
	};
	if (option && typeof option === "object") {
		myChartlocalsex.setOption(option, true);
	}
	myChartlocalsex.showLoading();//数据加载中 待数据加载完成设置消失效果
	$.get("mock/businessCarPeople.json",function(result){
		myChartlocalsex.hideLoading();//数据加载完成隐藏
		var sex = result.sex;
		var legendData = [];
		var seriesData = [];
		for(let i in sex){
			legendData.push(sex[i][0]);
			let item = {};
			item.name = sex[i][0];
			item.value = sex[i][1];
			seriesData.push(item);
		}
		option.legend.data = legendData;
		option.series[0].data = seriesData;
		myChartlocalsex.setOption(option, true);
	});
	window.onresize = myChartlocalsex.resize;//跟着变化
	//年龄分布折线图
	var myChartlocalage = echarts.init(age);
	//var data_val=[2220, 1682, 2791, 3000, 4090, 3230, 2910],
		//xAxis_val=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	var data_val1=[0,0,0,0,0,0,0];
	var option1 = {
		backgroundColor:'#47474a',
		grid:{
			left:10,
			top:'10%',
			bottom:20,
			right:40,
			containLabel:true
		},
		tooltip:{
			show:true,
			backgroundColor:'#384157',
			borderColor:'#384157',
			borderWidth:1,
			formatter:'{b}:{c}',
			extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
		},
		legend:{
			right:0,
			top:0,
			data:['人数'],
			textStyle:{
				color :'#fff'
			}
		},
		title: {
			text: '',
			x:'4.5%',
			top: '1%',
			textStyle:{
				color :'#5c6076'
			}
		},
		xAxis: {
			data: [],
			boundaryGap:false,
			axisLine:{
				show:false
			},
			axisLabel: {
				textStyle: {
					color: '#fff'
				}
			},
			axisTick:{
				show:false
			}
		},
		yAxis: {
			ayisLine:{
				show:false
			},
			axisLabel: {
				textStyle: {
					color: '#fff'
				}
			},
			splitLine:{
				show:true,
				lineStyle:{
					color:'#2e3547'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#384157'
				}
			}
		},

		series: [
			{
				type: 'bar',
				name:'linedemo',


				tooltip:{
					show:false
				},
				animation:false,
				barWidth:1.4,
				hoverAnimation:false,
				data:[],
				itemStyle:{
					normal:{
						color:'#f17a52',
						opacity:0.6,
						label:{
							show:false
						}
					}
				}
			},
			{
				type: 'line',
				name:'人数',

				animation:false,
				symbol:'circle',

				hoverAnimation:false,
				data:data_val1,
				itemStyle:{
					normal:{
						color:'#f17a52',
						opacity:0,
					}
				},
				lineStyle:{
					normal:{
						width:1,
						color:'#384157',
						opacity:1
					}
				}
			},
			{
				type: 'line',
				name:'linedemo',
				smooth:true,
				symbolSize:10,
				animation:false,
				lineWidth:1.2,
				hoverAnimation:false,
				data:[],
				symbol:'circle',
				itemStyle:{
					normal:{
						color:'#f17a52',
						shadowBlur: 40,
						label:{
							show:true,
							position:'top',
							textStyle:{
								color:'#f17a52',

							}
						}
					}
				},
				areaStyle:{
					normal:{
						color:'#f17a52',
						opacity:0.08
					}
				}

			}
		]
	};
	if (option1 && typeof option1 === "object") {
		myChartlocalage.setOption(option1, true);
	}
	myChartlocalage.showLoading();//数据加载中 待数据加载完成设置消失效果
	$.get("mock/businessCarPeople.json",function(result){
		myChartlocalage.hideLoading();//数据加载完成隐藏
		var age = result.age;
		var ageData = [];
		var data_val = [];
		for(let i in age){
			ageData.push(age[i][0]);
			data_val.push(age[i][1]);
		}
		option1.xAxis.data = ageData;
		option1.series[0].data = data_val;
		option1.series[2].data = data_val;
		myChartlocalage.setOption(option1, true);
	});
	window.onresize = myChartlocalage.resize;//跟着变化

	//行业分布比值图
	var myChartlocalworkman = echarts.init(workman);
	var option2 = {
		title : {
			text: '',
			subtext: ''
		},
		tooltip : {
			trigger: 'axis'
		},
		legend: {
			data:['行业分布'],
			textStyle: {
				color: '#fff'
			}
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType: {show: true, type: ['line', 'bar']},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		xAxis : [
			{
				type : 'value',
				boundaryGap : [],
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
			}
		],
		yAxis : [
			{
				type : 'category',
				data : [],
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
			}
		],
		series : [
			{
				name:'行业分布',
				type:'bar',
				data:[]
			}
		]
	};

	if (option2 && typeof option2 === "object") {
		myChartlocalworkman.setOption(option2, true);
	}
	myChartlocalworkman.showLoading();//数据加载中 待数据加载完成设置消失效果
	$.get("mock/businessCarPeople.json",function(result){
		myChartlocalworkman.hideLoading();//数据加载完成隐藏
		var workman = result.workman;
		var yAxisData = [];
		var seriesData = [];
		for(let i in workman){
			yAxisData.push(workman[i][0]);
			seriesData.push(workman[i][1]);
		}
		option2.yAxis[0].data = yAxisData;
		option2.series[0].data = seriesData;
		myChartlocalworkman.setOption(option2, true);
	});
	window.onresize = myChartlocalworkman.resize;//跟着变化
	//年薪分布圆环图
	var i1 = 0;
	var moneyColors = ['#ff6868','#e16363','#b05a5b','#985557','#7a5052'];
	var myChartlocalmoney = echarts.init(money);
	var option3 = {
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient : 'vertical',
			x : 'left',
			data:[],
			textStyle: {
				color: '#fff'
			}
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType : {
					show: true,
					type: ['pie', 'funnel'],
					option: {
						funnel: {
							x: '25%',
							width: '50%',
							funnelAlign: 'center',
							max: 1548
						}
					}
				},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		series : [
			{
				name:'年薪分布',
				type:'pie',
				radius : ['50%', '70%'],
				itemStyle : {
					normal : {
						color: function () {
							return moneyColors[i1++];
						},
						label : {
							show : false
						},
						labelLine : {
							show : false
						}
					},
					emphasis : {
						label : {
							show : true,
							position : 'center',
							textStyle : {
								fontSize : '30',
								fontWeight : 'bold'
							}
						}
					}
				},
				data:[]
			}
		]
	};
	if (option3 && typeof option3 === "object") {
		myChartlocalmoney.setOption(option3, true);
	}
	myChartlocalmoney.showLoading();//数据加载中 待数据加载完成设置消失效果
	$.get("mock/businessCarPeople.json",function(result){
		myChartlocalmoney.hideLoading();//数据加载完成隐藏
		var money = result.money;
		var legendData3 = [];
		var seriesData3 = [];
		for(let i in money){
			legendData3.push(money[i][0]);
			let item = {};
			item.name = money[i][0];
			item.value = money[i][1];
			seriesData3.push(item);
		}
		option3.legend.data = legendData3;
		option3.series[0].data = seriesData3;
		myChartlocalmoney.setOption(option3, true);
	});
	window.onresize = myChartlocalmoney.resize;//跟着变化

	//家庭人口分布圆环图
	var i2 = 0;
	var familysColors = ['#40e253','#41c952', '#439f4f', '#448b4e', '#45724d'];
	var myChartlocalfamilys = echarts.init(familys);
	var option4 = {
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient : 'vertical',
			x : 'left',
			data:[],
			textStyle: {
				color: '#fff'
			}
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType : {
					show: true,
					type: ['pie', 'funnel'],
					option: {
						funnel: {
							x: '25%',
							width: '50%',
							funnelAlign: 'center',
							max: 1548
						}
					}
				},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		series : [
			{
				name:'家庭人口分布',
				type:'pie',
				radius : ['50%', '70%'],
				itemStyle : {
					normal : {
						color: function () {
							return familysColors[i2++];
						},
						label : {
							show : false
						},
						labelLine : {
							show : false
						}
					},
					emphasis : {
						label : {
							show : true,
							position : 'center',
							textStyle : {
								fontSize : '30',
								fontWeight : 'bold'
							}
						}
					}
				},
				data:[]
			}
		]
	};
	if (option4 && typeof option4 === "object") {
		myChartlocalfamilys.setOption(option4, true);
	}
	myChartlocalfamilys.showLoading();//数据加载中 待数据加载完成设置消失效果
	$.get("mock/businessCarPeople.json",function(result){
		myChartlocalfamilys.hideLoading();//数据加载完成隐藏
		var familys = result.familys;
		var legendData4 = [];
		var seriesData4 = [];
		for(let i in familys){
			legendData4.push(familys[i][0]);
			let item = {};
			item.name = familys[i][0];
			item.value = familys[i][1];
			seriesData4.push(item);
		}
		 option4.legend.data = legendData4;
		option4.series[0].data = seriesData4;
		myChartlocalfamilys.setOption(option4, true);
	});

	window.onresize = myChartlocalfamilys.resize;//跟着变化
	//住房分布圆环图
	var i3 = 0;
	var houseColors = ['#44da95','#44c289', '#459b75', '#46886b', '#46705f'];
	var myChartlocalhouse = echarts.init(house);
	var option5 = {
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient : 'vertical',
			x : 'left',
			data:[],
			textStyle: {
				color: '#fff'
			}
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType : {
					show: true,
					type: ['pie', 'funnel'],
					option: {
						funnel: {
							x: '25%',
							width: '50%',
							funnelAlign: 'center',
							max: 1548
						}
					}
				},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		series : [
			{
				name:'住房分布',
				type:'pie',
				radius : ['50%', '70%'],
				itemStyle : {
					normal : {
						color: function () {
							return houseColors[i3++];
						},
						label : {
							show : false
						},
						labelLine : {
							show : false
						}
					},
					emphasis : {
						label : {
							show : true,
							position : 'center',
							textStyle : {
								fontSize : '30',
								fontWeight : 'bold'
							}
						}
					}
				},
				data:[]
			}
		]
	};
	if (option5 && typeof option5 === "object") {
		myChartlocalhouse.setOption(option5, true);
	}
	myChartlocalhouse.showLoading();//数据加载中 待数据加载完成设置消失效果
	$.get("mock/businessCarPeople.json",function(result){
		myChartlocalhouse.hideLoading();//数据加载完成隐藏
		var house = result.house;
		var legendData5 = [];
		var seriesData5 = [];
		for(let i in house){
			legendData5.push(house[i][0]);
			let item = {};
			item.name = house[i][0];
			item.value = house[i][1];
			seriesData5.push(item);
		}
		option5.legend.data = legendData5;
		option5.series[0].data = seriesData5;
		myChartlocalhouse.setOption(option5, true);
	});

	window.onresize = myChartlocalhouse.resize;//跟着变化

	//家庭类型分布圆环图
	var i4 = 0;
	var familyStyleColors = ['#44b5da', '#44a3c3', '#45869c', '#467789', '#466672'];
	var myChartlocalfamilyStyle = echarts.init(familyStyle);
	var option6 = {
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient : 'vertical',
			x : 'left',
			data:[],
			textStyle: {
				color: '#fff'
			}
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType : {
					show: true,
					type: ['pie', 'funnel'],
					option: {
						funnel: {
							x: '25%',
							width: '50%',
							funnelAlign: 'center',
							max: 1548
						}
					}
				},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		series : [
			{
				name:'家庭类型分布',
				type:'pie',
				radius : ['50%', '70%'],
				itemStyle : {
					normal : {
						color: function () {
							return familyStyleColors[i4++];
						},
						label : {
							show : false
						},
						labelLine : {
							show : false
						}
					},
					emphasis : {
						label : {
							show : true,
							position : 'center',
							textStyle : {
								fontSize : '30',
								fontWeight : 'bold'
							}
						}
					}
				},
				data:[]
			}
		]
	};
	if (option6 && typeof option6 === "object") {
		myChartlocalfamilyStyle.setOption(option6, true);
	}
	myChartlocalfamilyStyle.showLoading();//数据加载中 待数据加载完成设置消失效果
	$.get("mock/businessCarPeople.json",function(result){
		myChartlocalfamilyStyle.hideLoading();//数据加载完成隐藏
		var familyStyle = result.familyStyle;
		var legendData6 = [];
		var seriesData6 = [];
		for(let i in familyStyle){
			legendData6.push(familyStyle[i][0]);
			let item = {};
			item.name = familyStyle[i][0];
			item.value = familyStyle[i][1];
			seriesData6.push(item);
		}
		option6.legend.data = legendData6;
		option6.series[0].data = seriesData6;
		myChartlocalfamilyStyle.setOption(option6, true);
	});

	window.onresize = myChartlocalfamilyStyle.resize;//跟着变化

	//学历分布圆环图
	var i5 = 0;
	var collegeColors = ['#ffa45a', '#e19557', '#b07c53', '#987051', '#7a614e'];
	var myChartlocalcollege = echarts.init(college);
	var option7 = {
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient : 'vertical',
			x : 'left',
			data:[],
			textStyle: {
				color: '#fff'
			}
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType : {
					show: true,
					type: ['pie', 'funnel'],
					option: {
						funnel: {
							x: '25%',
							width: '50%',
							funnelAlign: 'center',
							max: 1548
						}
					}
				},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		series : [
			{
				name:'学历分布',
				type:'pie',
				radius : ['50%', '70%'],
				itemStyle : {
					normal : {
						color: function () {
							return collegeColors[i5++];
						},
						label : {
							show : false
						},
						labelLine : {
							show : false
						}
					},
					emphasis : {
						label : {
							show : true,
							position : 'center',
							textStyle : {
								fontSize : '30',
								fontWeight : 'bold'
							}
						}
					}
				},
				data:[]
			}
		]
	};
	if (option7 && typeof option7 === "object") {
		myChartlocalcollege.setOption(option7, true);
	}
	myChartlocalcollege.showLoading();//数据加载中 待数据加载完成设置消失效果
	$.get("mock/businessCarPeople.json",function(result){
		myChartlocalcollege.hideLoading();//数据加载完成隐藏
		var college = result.college;
		var legendData7 = [];
		var seriesData7 = [];
		for(let i in college){
			legendData7.push(college[i][0]);
			let item = {};
			item.name = college[i][0];
			item.value = college[i][1];
			seriesData7.push(item);
		}
		option7.legend.data = legendData7;
		option7.series[0].data = seriesData7;
		myChartlocalcollege.setOption(option7, true);
	});

	window.onresize = myChartlocalcollege.resize;//跟着变化

	//人生阶段分布圆环图
	var i6 = 0;
	var lifeColors = ['#eae594','#d0cc88','#a4a174','#8f8c6b','#74735f'];
	var myChartlocallife = echarts.init(life);
	var option8 = {
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient : 'vertical',
			x : 'left',
			data:[],
			textStyle: {
				color: '#fff'
			}
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType : {
					show: true,
					type: ['pie', 'funnel'],
					option: {
						funnel: {
							x: '25%',
							width: '50%',
							funnelAlign: 'center',
							max: 1548
						}
					}
				},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		series : [
			{
				name:'人生阶段分布',
				type:'pie',
				radius : ['50%', '70%'],
				itemStyle : {
					normal : {
						color: function () {
							return lifeColors[i6++];
						},
						label : {
							show : false
						},
						labelLine : {
							show : false
						}
					},
					emphasis : {
						label : {
							show : true,
							position : 'center',
							textStyle : {
								fontSize : '30',
								fontWeight : 'bold'
							}
						}
					}
				},
				data:[]
			}
		]
	};
	if (option8 && typeof option8 === "object") {
		myChartlocallife.setOption(option8, true);
	}
	myChartlocallife.showLoading();//数据加载中 待数据加载完成设置消失效果
	$.get("mock/businessCarPeople.json",function(result){
		myChartlocallife.hideLoading();//数据加载完成隐藏
		var life = result.life;
		var legendData8 = [];
		var seriesData8 = [];
		for(let i in life){
			legendData8.push(life[i][0]);
			let item = {};
			item.name = life[i][0];
			item.value = life[i][1];
			seriesData8.push(item);
		}
		option8.legend.data = legendData8;
		option8.series[0].data = seriesData8;
		myChartlocallife.setOption(option8, true);
	});
	window.onresize = myChartlocallife.resize;//跟着变化
})

