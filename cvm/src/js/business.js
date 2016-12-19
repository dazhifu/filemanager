$(function () {
	//地域分布
	var randomData = function () {
		return Math.round(Math.random()*1000);
	};
	var local = document.getElementById('local');
	var myChartlocal = echarts.init(local);
	var option1 = {
		title: {
			text: '汽车销量',
			subtext: '',
			left: 'center',

			textStyle: {
				color: '#408829'
			},
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data:[ '荣威',  '名爵',  '雪佛兰'],
			textStyle:{
				color :'#fff'
			}


		},
		visualMap: {
			min: 0,
			max: 2500,
			left: 'left',
			top: 'bottom',
			text: ['高','低'],           // 文本，默认为数值文本
			calculable: true
		},
		toolbox: {
			show: true,
			orient: 'vertical',
			left: 'right',
			top: 'center',
			feature: {
				dataView: {readOnly: false},
				restore: {},
				saveAsImage: {}
			}
		},
		series: [
			{
				name: '荣威',
				type: 'map',
				mapType: 'china',
				roam: false,
				label: {
					normal: {
						show: true
					},
					emphasis: {
						show: true
					}
				},
				data:[
					{name: '北京',value: randomData() },
					{name: '天津',value: randomData() },
					{name: '上海',value: randomData() },
					{name: '重庆',value: randomData() },
					{name: '河北',value: randomData() },
					{name: '河南',value: randomData() },
					{name: '云南',value: randomData() },
					{name: '辽宁',value: randomData() },
					{name: '黑龙江',value: randomData() },
					{name: '湖南',value: randomData() },
					{name: '安徽',value: randomData() },
					{name: '山东',value: randomData() },
					{name: '新疆',value: randomData() },
					{name: '江苏',value: randomData() },
					{name: '浙江',value: randomData() },
					{name: '江西',value: randomData() },
					{name: '湖北',value: randomData() },
					{name: '广西',value: randomData() },
					{name: '甘肃',value: randomData() },
					{name: '山西',value: randomData() },
					{name: '内蒙古',value: randomData() },
					{name: '陕西',value: randomData() },
					{name: '吉林',value: randomData() },
					{name: '福建',value: randomData() },
					{name: '贵州',value: randomData() },
					{name: '广东',value: randomData() },
					{name: '青海',value: randomData() },
					{name: '西藏',value: randomData() },
					{name: '四川',value: randomData() },
					{name: '宁夏',value: randomData() },
					{name: '海南',value: randomData() },
					{name: '台湾',value: randomData() },
					{name: '香港',value: randomData() },
					{name: '澳门',value: randomData() }
				]
			},
			{
				name: '名爵',
				type: 'map',
				mapType: 'china',
				label: {
					normal: {
						show: true
					},
					emphasis: {
						show: true
					}
				},
				data:[
					{name: '北京',value: randomData() },
					{name: '天津',value: randomData() },
					{name: '上海',value: randomData() },
					{name: '重庆',value: randomData() },
					{name: '河北',value: randomData() },
					{name: '安徽',value: randomData() },
					{name: '新疆',value: randomData() },
					{name: '浙江',value: randomData() },
					{name: '江西',value: randomData() },
					{name: '山西',value: randomData() },
					{name: '内蒙古',value: randomData() },
					{name: '吉林',value: randomData() },
					{name: '福建',value: randomData() },
					{name: '广东',value: randomData() },
					{name: '西藏',value: randomData() },
					{name: '四川',value: randomData() },
					{name: '宁夏',value: randomData() },
					{name: '香港',value: randomData() },
					{name: '澳门',value: randomData() }
				]
			},
			{
				name: '雪佛兰',
				type: 'map',
				mapType: 'china',
				label: {
					normal: {
						show: true
					},
					emphasis: {
						show: true
					}
				},
				data:[
					{name: '北京',value: randomData() },
					{name: '天津',value: randomData() },
					{name: '上海',value: randomData() },
					{name: '广东',value: randomData() },
					{name: '台湾',value: randomData() },
					{name: '香港',value: randomData() },
					{name: '澳门',value: randomData() }
				]
			}
		]
	};
	myChartlocal.setOption(option1,true);                                                                   //    地域分布结束
	window.onresize = myChartlocal.resize;

	//  Top 10销量排名
	var city = document.getElementById("city");
	var myChartcity = echarts.init(city);
	var option2 = {
		tooltip : {
			trigger: 'axis',
			axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},                 //   tooltip end
		legend: {
			data: [
				'荣威','名爵','雪佛兰'
			],
			textStyle:{
				color:"white"//文字颜色
			}
		},              //    legend   end

		grid: {
			top:'25%',
			left: '3%',
			right: '4%',
			bottom: '25%',
			containLabel: true
		},            //   grid    end
		xAxis:  {
			type: 'value',
		},            //xAxis    end
		yAxis: {
			type: 'category',
			data: ['秦皇岛','廊坊','保定','石家庄','天津','上海','武汉'],
			axisLine:{
				lineStyle:{
					color:"white"//字体颜色
				}
			}
		},                   //    yAxis    end
		series: [
			{
				name: '荣威',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,//显示数字
						position: 'insideRight'
					}                           //normal   end
				},                             //   label    end
				barWidth : 30,//宽度
				data: [320, 302, 301, 334, 390, 330, 320],       //感觉没有起作用
				itemStyle:{
					normal:{
						color:"pink"//更改柱状图填充颜色

					}
				}
			},
			{
				name: '名爵',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,//显示数字
						position: 'insideRight'
					}
				},
				barWidth : 30,//宽度
				data: [120, 132, 101, 134, 90, 230, 210],       //感觉没有起作用
				itemStyle:{
					normal:{
						color:"green"//更改柱状图填充颜色

					}
				}
			},
			{
				name: '雪佛兰',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,//显示数字
						position: 'insideRight'
					}
				},
				barWidth : 30,//宽度
				data: [220, 182, 191, 234, 290, 330, 310],       //感觉没有起作用
				itemStyle:{
					normal:{
						color:"blue"//更改柱状图填充颜色

					}
				}
			}
		]
	};
	if (option2 && typeof option2 === "object") {                             //   貌似是加载（重绘）有关
		myChartcity.setOption(option2, true);
	}
	myChartcity.showLoading();
	$.get("mock/business.json",function(result){
		myChartcity.hideLoading();//数据加载完成隐藏
		var arr=[];
		var res=[];
		for(city in result.table){
			arr.push(result.table[city][3]);
			res.push(result.table[city][1]);
		}
		option2.yAxis.data = res;
		option2.series[0].data = arr.slice(0);
		myChartcity.setOption(option2, true);
	});
	window.onresize = myChartcity.resize;                                   //排行结束

	//  车辆颜色分布
	var i1 = 0;
	var CarColorcolors = ['#B23AEE','#CD0000','#0000EE','#0A0A0A','#FF6EB4'];
	var carColor = document.getElementById("carColor");
	var myChartcarColor = echarts.init(carColor);
	var option3 = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			x: 'left',
			data:[],
			textStyle:{
				color :'#fff'
			}
		},
		series: [
			{
				name:'车辆颜色分布',
				type:'pie',
				radius: ['50%', '70%'],
				avoidLabelOverlap: false,
				itemStyle: {
					normal: {
						color: function () {
							return CarColorcolors[i1++];
						},
						label: {
							show: false
						},
						position: 'center'
					},
					emphasis: {
						label: {
							show: true,
							position: 'center',
							textStyle: {
								fontSize: '30',
								fontWeight: 'bold'
							}
						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data:[]
			}
		]
	};
	if (option3 && typeof option3 === "object") {
		myChartcarColor.setOption(option3, true);
	}
	myChartcarColor.showLoading();
	$.get("mock/business.json",function(result){
		myChartcarColor.hideLoading();//数据加载完成隐藏
		var colo = result.color;
		var cc = [];
		var aa = [];
		for(var i in colo) {
			var item = {};
			item.name = colo[i][0];
			item.value = colo[i][1];
			cc.push(item);
			aa.push(colo[i][0]);
		}
		option3.legend.data = cc;
		option3.series[0].data = cc;
		myChartcarColor.setOption(option3, true);
	});
	window.onresize = myChartcarColor.resize;                         //  车辆颜色结束

	//抵押情况
	var i2 = 0;
	var carMortgagecolors = ['#ff6d2d','#e5e5e5'];
	var carMortgage = document.getElementById("carMortgage");
	var myChartcarMortgage = echarts.init(carMortgage);
	var option4 = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			x: 'left',
			data:[],
			textStyle:{
				color :'#fff'
			}
		},
		toolbox: {
			show : true,
			feature : {
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		series: [
			{
				name:'抵押情况',
				type:'pie',
				radius: ['50%', '70%'],
				itemStyle: {
					normal: {
						color:function(){
							return carMortgagecolors[i2++];
						},
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					},
					emphasis: {
						label: {
							show: true,
							position: 'center',
							textStyle: {
								fontSize: '30',
								fontWeight: 'bold'
							}
						}
					}
				},
				data:[]
			}
		]
	};
	if (option4 && typeof option4 === "object") {
		myChartcarMortgage.setOption(option4, true);
	}
	myChartcarMortgage.showLoading();
	$.get("mock/business.json",function(result){
		myChartcarMortgage.hideLoading();//数据加载完成隐藏
		var mortgage = result.mortgage;
		var hh = [];
		var tt = [];
		var mort = {};
		var unmort = {};
		mort.name = mortgage[0][0];
		mort.value = mortgage[0][1];
		unmort.name = mortgage[1][0];
		unmort.value = mortgage[1][1];
		hh.push(mort);
		hh.push(unmort);
		tt.push(mortgage[0][0]);
		tt.push(mortgage[1][0]);
		option4.legend.data = tt;
		option4.series[0].data = hh;
		myChartcarMortgage.setOption(option4, true);
	});
	window.onresize = myChartcarMortgage.resize;                                     //抵押情况结束

	//使用性质
	var i3 = 0;
	var carUsecolor = ['#44da95','#44c289','#459b75','#46886b','#46705f'];
	var carUse = document.getElementById("carUse");
	var myChartcarUse = echarts.init(carUse);
	var option5 = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			x: 'left',
			data:[],
			textStyle:{
				color :'#fff'
			}
		},
		series: [
			{
				name:'使用性质',
				type:'pie',
				radius: ['50%', '70%'],
				avoidLabelOverlap: false,
				itemStyle: {
					normal: {
						   color: function () {
							   return carUsecolor[i3++];
						   },
						label: {
							show: false
						},
						position: 'center'
					},
					emphasis: {
						label: {
							show: true,
							position: 'center',
							textStyle: {
								fontSize: '30',
								fontWeight: 'bold'
							}
						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data:[]
			}
		]
	};
	if (option5 && typeof option5 === "object") {
		myChartcarUse.setOption(option5, true);
	}
	myChartcarUse.showLoading();
	$.get("mock/business.json",function(result){
		myChartcarUse.hideLoading();//数据加载完成隐藏
		var useway = result.useway;
		var dd = [];
		var bb = [];
		for(var i in useway){
			var item = {};
			item.name = useway[i][0];
			item.value = useway[i][1];
			dd.push(item);
			bb.push(useway[i][0]);
		}
		option5.legend.data = bb;
		option5.series[0].data = dd;
		myChartcarUse.setOption(option5, true);
	});
	window.onresize = myChartcarUse.resize;                                             //使用情况结束

	//新车占比
	var i4 = 0;
	var carNewcolors = ['#e5e5e5','#ff6256'];
	var carNew = document.getElementById("carNew");
	var myChartcarNew = echarts.init(carNew);
	var option6 = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			x: 'left',
			data:['旧车','新车'],
			textStyle:{
				color :'#fff'
			}
		},
		series: [
			{
				name:'新车占比',
				type:'pie',
				radius: ['50%', '70%'],
				avoidLabelOverlap: false,
				itemStyle: {
					normal: {
						color: function () {
							return carNewcolors[i4++];
						},
						label: {
							show: false
						},
						position: 'center'
					},
					emphasis: {
						label: {
							show: true,
							position: 'center',
							textStyle: {
								fontSize: '30',
								fontWeight: 'bold'
							}
						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data:[]
			}
		]
	};
	if (option6 && typeof option6 === "object") {
		myChartcarNew.setOption(option6, true);
	}
	myChartcarNew.showLoading();
	$.get("mock/business.json",function(result){
		myChartcarNew.hideLoading();//数据加载完成隐藏
		var mm = result.newly;
		var dd = [];
		var newcar = {};
		var oldcar = {};
		newcar.name = '新车';
		newcar.value = mm[0][1];
		dd.push(newcar);
		oldcar.name = '旧车';
		oldcar.value = mm[1][1];
		dd.push(oldcar);
		option6.series[0].data = dd;
		myChartcarNew.setOption(option6, true);
	});
	window.onresize = myChartcarNew.resize;                                             //新车上牌结束
});
