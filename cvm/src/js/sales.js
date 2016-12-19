$(function(){
	var table = document.getElementById('getList');
	var page =document.getElementById("page");
	var start = 0;
	var end = 15;
	
	function loadPage(){
		$.ajax({
			url:"mock/sales.json",
			type:"get",
			success:function(result){
				//console.log(result);
				var res = result.table;
				console.log(res.length);
				table.innerHTML = "";
				// 
				for(var i = start; i <= end; i++){
					var tr = document.createElement('tr');
					// 
					for(var j=0 ; j< 9;j++){
						var td = document.createElement('td');
	//					console.log(res[i].name);
						switch(j){
							case 0: td.innerHTML = res[i].name;break;
							case 1: td.innerHTML = res[i].tel;break;
							case 2: td.innerHTML = res[i].carStyle;break;
							case 3: td.innerHTML = res[i].pro;break;
							case 4: td.innerHTML = res[i].city;break;
							case 5: td.innerHTML = res[i].time;break;
							case 6: td.innerHTML = res[i].form;break;
							case 7: td.innerHTML = res[i].title;break;
							case 8: td.innerHTML = res[i].current;break;
						}
						tr.appendChild(td);
					}
					table.appendChild(tr);
				}
				
				
				
			}
		})
	}
	loadPage();
	
	function pagechange(){
		$.ajax({
			url:"mock/sales.json",
			type:"get",
			success:function(result){
				//console.log(result);
				var res = result.table;
				page.innerHTML = "";
				var num=1;
				for(var k =0;k < res.length;k+=15){
					var a = document.createElement('a');
					a.innerHTML=num;
					num++;
					page.appendChild(a);
					$("#page a").eq(0).addClass('currentpage');
				}
				
				$('#page a').on("click",function(){
					$('#page a').removeClass();
					$(this).addClass('currentpage');
				var pageIndex = $(this).index();
					start = pageIndex*15  ;
					end = start+15;
					console.log(start);
					loadPage();
				})
			}
		})
	}
	pagechange()
})
