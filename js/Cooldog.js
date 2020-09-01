$(function () {
	//鼠标移入显示左右箭头和关闭按钮
	//图片轮播1
	var timer = '';
	$('.tbhd').mouseover(function () {
		$('.btn_left').show('2000');
		$('.btn_right').show('2000');
		$('.btn_close').show('2000');
		clearInterval(timer);
	}).mouseleave(function () {
		$('.btn_left').hide('2000');
		$('.btn_right').hide('2000');
		$('.btn_close').hide('2000');
		timer = setInterval(btn_right, 5000);
	});
	
	//点击关闭隐藏轮播图
	$('.btn_close').on('click', function () {
		$('.tbhd').hide('10000');
	});
	
	var arr = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'];
	var index = 0;
	
	//上一张
	$('.btn_left').on('click', function () {
		btn_left();
	});
	
	//下一张
	$('.btn_right').on('click', function () {
		btn_right();
	});
	
	//图片自动轮播
	timer = setInterval(btn_right, 2000);
	
	//点击上一张的封装函数
	function btn_left() {
		arr.unshift(arr[6]);
		arr.pop();
		$('.Cooldog_content li').each(function (i, e) {
			$(e).removeClass().addClass(arr[i]);
		})
		index--;
		if (index < 0) {
			index = 6;
		}
		show();
	}
	
	//点击下一张的封装函数
	function btn_right() {
		arr.push(arr[0]);
		arr.shift();
		$('.Cooldog_content li').each(function (i, e) {
			$(e).removeClass().addClass(arr[i]);
		})
		index++;
		if (index > 6) {
			index = 0;
		}
		show();
	}
	
	//点击底部的按钮切换图片
	$('.buttons a').each(function () {
		$(this).on('click', function () {
			var myindex = $(this).index();
			var mindex = myindex - index;
			if (mindex == 0) {
				return;
			}
			else if (mindex > 0) {
				var newarr = arr.splice(0, mindex);
				//$.merge() 函数用于合并两个数组内容到第一个数组
				arr = $.merge(arr, newarr);
				$('.Cooldog_content li').each(function (i, e) {
					$(e).removeClass().addClass(arr[i]);
				})
				index = myindex;
				show();
			}
			else if (mindex < 0) {
				//reverse() 方法用于颠倒数组中元素的顺序。
				arr.reverse();
				var oldarr = arr.splice(0, -mindex);
				arr = $.merge(arr, oldarr);
				arr.reverse();
				$('.Cooldog_content li').each(function (i, e) {
					$(e).removeClass().addClass(arr[i]);
				})
				index = myindex;
				show();
			}
		})
	})
	
	//底部按钮高亮
	function show() {
		$('.buttons a').eq(index).addClass('color').siblings().removeClass('color');
	}
	//点击
	$(".cnxha").click(function(){
		$(".cnxh").show();
		$(".rmsd").hide();
		$(".rmsda").removeClass("dbr");
		$(".ysxs").hide();
		$(".ysxsa").removeClass("dbr");
		$(".phb").hide();
		$(".phba").removeClass("dbr");
		$(".dszz").hide();
		$(".dszza").removeClass("dbr");
		$(".zxsj").hide();
		$(".zxsja").removeClass("dbr");
		$(".cnxha").addClass("dbr");
	})
	$(".rmsda").click(function(){
		$(".rmsd").show();
		$(".cnxh").hide();
		$(".cnxha").removeClass("dbr");
		$(".ysxs").hide();
		$(".ysxsa").removeClass("dbr");
		$(".phb").hide();
		$(".phba").removeClass("dbr");
		$(".dszz").hide();
		$(".dszza").removeClass("dbr");
		$(".zxsj").hide();
		$(".zxsja").removeClass("dbr");
		$(".rmsda").addClass("dbr");
	})
	$(".ysxsa").click(function(){
		$(".ysxs").show();
		$(".cnxh").hide();
		$(".cnxha").removeClass("dbr");
		$(".rmsd").hide();
		$(".rmsda").removeClass("dbr");
		$(".phb").hide();
		$(".phba").removeClass("dbr");
		$(".dszz").hide();
		$(".dszza").removeClass("dbr");
		$(".zxsj").hide();
		$(".zxsja").removeClass("dbr");
		$(".ysxsa").addClass("dbr");
	})
	$(".phba").click(function(){
		$(".phb").show();
		$(".cnxh").hide();
		$(".cnxha").removeClass("dbr");
		$(".rmsd").hide();
		$(".rmsda").removeClass("dbr");
		$(".ysxs").hide();
		$(".ysxsa").removeClass("dbr");
		$(".dszz").hide();
		$(".dszza").removeClass("dbr");
		$(".zxsj").hide();
		$(".zxsja").removeClass("dbr");
		$(".phba").addClass("dbr");
	})
	$(".dszza").click(function(){
		$(".dszz").show();
		$(".cnxh").hide();
		$(".cnxha").removeClass("dbr");
		$(".rmsd").hide();
		$(".rmsda").removeClass("dbr");
		$(".ysxs").hide();
		$(".ysxsa").removeClass("dbr");
		$(".phb").hide();
		$(".phba").removeClass("dbr");
		$(".zxsj").hide();
		$(".zxsja").removeClass("dbr");
		$(".dszza").addClass("dbr");
	})
	$(".zxsja").click(function(){
		$(".zxsj").show();
		$(".cnxh").hide();
		$(".cnxha").removeClass("dbr");
		$(".rmsd").hide();
		$(".rmsda").removeClass("dbr");
		$(".ysxs").hide();
		$(".ysxsa").removeClass("dbr");
		$(".phb").hide();
		$(".phba").removeClass("dbr");
		$(".dszz").hide();
		$(".dszza").removeClass("dbr");
		$(".zxsja").addClass("dbr");
	})
	$(".qb").click(function(){
		$(".qb").addClass("xs");
		$(".zz").removeClass("xs");
		$(".ml").removeClass("xs");
		$(".shkx").removeClass("xs");
		$(".zf").removeClass("xs");
		$(".js").removeClass("xs");
		$(".ysxs-qb-lb").show();
		$(".ysxs-js-lb").hide();
		$(".ysxs-zz-lb").hide();
		$(".ysxs-shkx-lb").hide();
		$(".ysxs-zf-lb").hide();
		$(".ysxs-ml-lb").hide();
	})
	$(".ml").click(function(){
		$(".ml").addClass("xs");
		$(".zz").removeClass("xs");
		$(".qb").removeClass("xs");
		$(".shkx").removeClass("xs");
		$(".zf").removeClass("xs");
		$(".js").removeClass("xs");
		$(".ysxs-ml-lb").show();
		$(".ysxs-js-lb").hide();
		$(".ysxs-zz-lb").hide();
		$(".ysxs-shkx-lb").hide();
		$(".ysxs-zf-lb").hide();
		$(".ysxs-qb-lb").hide();
	})
	$(".zz").click(function(){
		$(".zz").addClass("xs");
		$(".qb").removeClass("xs");
		$(".ml").removeClass("xs");
		$(".shkx").removeClass("xs");
		$(".zf").removeClass("xs");
		$(".js").removeClass("xs");
		$(".ysxs-zz-lb").show();
		$(".ysxs-js-lb").hide();
		$(".ysxs-qb-lb").hide();
		$(".ysxs-shkx-lb").hide();
		$(".ysxs-zf-lb").hide();
		$(".ysxs-ml-lb").hide();
	})
	$(".shkx").click(function(){
		$(".shkx").addClass("xs");
		$(".qb").removeClass("xs");
		$(".ml").removeClass("xs");
		$(".zz").removeClass("xs");
		$(".zf").removeClass("xs");
		$(".js").removeClass("xs");
		$(".ysxs-shkx-lb").show();
		$(".ysxs-js-lb").hide();
		$(".ysxs-qb-lb").hide();
		$(".ysxs-zz-lb").hide();
		$(".ysxs-zf-lb").hide();
		$(".ysxs-ml-lb").hide();
	})
	$(".zf").click(function(){
		$(".zf").addClass("xs");
		$(".qb").removeClass("xs");
		$(".ml").removeClass("xs");
		$(".zz").removeClass("xs");
		$(".shkx").removeClass("xs");
		$(".js").removeClass("xs");
		$(".ysxs-zf-lb").show();
		$(".ysxs-js-lb").hide();
		$(".ysxs-qb-lb").hide();
		$(".ysxs-zz-lb").hide();
		$(".ysxs-shkx-lb").hide();
		$(".ysxs-ml-lb").hide();
	})
	$(".js").click(function(){
		$(".js").addClass("xs");
		$(".qb").removeClass("xs");
		$(".ml").removeClass("xs");
		$(".zz").removeClass("xs");
		$(".shkx").removeClass("xs");
		$(".zf").removeClass("xs");
		$(".ysxs-js-lb").show();
		$(".ysxs-zf-lb").hide();
		$(".ysxs-qb-lb").hide();
		$(".ysxs-zz-lb").hide();
		$(".ysxs-shkx-lb").hide();
		$(".ysxs-ml-lb").hide();
	})
	//图片轮播2
	var box = document.querySelector('#box');
	var slide = document.querySelector('.slide');
	var arraw = document.querySelector('.arraw');
	var lis = document.querySelectorAll('.li');
	var json = [  //  包含了5张图片里面所有的样式
		{   //  1
			width:200,
			top:10,
			left:100,
			opacity:20,
			z:2,
			id:1
		},
		{  // 2
			width:350,
			top:30,
			left:50,
			opacity:60,
			z:3,
			id:2
		},
		{   // 3
			width:500,
			top:50,
			left:150,
			opacity:100,
			z:4,
			id:3
		},
		{  // 4
			width:350,
			top:30,
			left:200,
			opacity:60,
			z:3,
			id:4
		},	
		{   //5
			width:200,
			top:10,
			left:250,
			opacity:20,
			z:2,
			id:5
		}
	];
	box.addEventListener('mouseover', function(){
	// console.log('aaa')
		animate(arraw, {opacity: 100});
	});
	box.addEventListener('mouseout', function(){
	// console.log('aaa')
		animate(arraw, {opacity: 0});
	});
	
	var next = document.querySelector('.next');
	var prev = document.querySelector('.prev');
	var timer = null;
	var flag = true;
	next.addEventListener('click', function(){
		// alert('next');
		// console.log(json);
		// console.log('================')
		clearInterval(timer);
		if(flag == true){
			move(true);
			flag = false;
		}
		//console.log(json);
	});
	next.addEventListener('mouseleave', function(){
	
		clearInterval(timer);
		//alert('next')
		run();
		//console.log(json);
	
	});
	prev.addEventListener('click', function(){
		clearInterval(timer);
		// alert('prev')
		if(flag == true){
			move(false);
			flag = false;
		}
	});
	prev.addEventListener('mouseleave', function(){
		// alert('prev')
		// clearInterva(timer);
		run();
	});
	
	move();
	run();
	function run(){
		clearInterval(timer);
		timer = setInterval(function(){
			// console.log('run')
			if(flag == true){
			flag = false;
			move(true);
			}
			// console.log(json)
		},5000);
	}
	
	function move(x){
	if(x != undefined){
		if(x){
		json.push(json.shift());
		}else{
		  json.unshift(json.pop());
		};
		};
		
		for(var i = 0; i<json.length; i++){
			animate(lis[i],{
			  width: json[i].width,
			  top: json[i].top,
			  left: json[i].left,
			  opacity: json[i].opacity,
			  zIndex: json[i].z
			},function(){flag = true;})
		};
	}
	
	function animate(obj, json, callback){
	// 先停止定时器
	  clearInterval(obj.timers);
	  obj.timers = setInterval(function(){
		var stoped = true;
		// console.log('sss')
		for(var k in json){
		 // var leader = parseInt(getStyle(obj, k));
		 var leader = 0;
		 if(k == 'opacity'){
		  leader = Math.round(getStyle(obj, k)*100) || 100;
		 }else {
		  // console.log(json[k]);
		  leader = parseInt(getStyle(obj, k)) || 0;
		 };
	//         console.log(leader);
		 // json[k]是目标位置
		 var step = (json[k]-leader)/10;
		 step = step > 0? Math.ceil(step) : Math.floor(step);
		 leader = leader + step;
		 if(k == 'opacity'){
		  obj.style[k] = leader/100;
		  obj.style['filter'] = 'alpha(opacity='+ leader +')';
		 }else if(k == 'zIndex'){
		  obj.style['zIndex'] = json[k];
		 }else{
		  obj.style[k] = leader + "px";
		 }
		 if(leader != json[k]){
		  stoped = false;
		  }
		 };
		 if(stoped){
			// console.log('stop')
			clearInterval(obj.timers);
			callback && callback();
		  };
	  },5000);
	};
	//获取属性值
	function getStyle(obj, attr){
	  if(obj.currentStyle){
		return obj.currentStyle[attr];
	  }else{
		return window.getComputedStyle(obj, null)[attr];
	  };
	};
})