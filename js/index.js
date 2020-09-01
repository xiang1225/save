window.onload = function() {
	//获得slider插件对象
	var gallery = mui('.mui-slider');
	gallery.slider({
		interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
	});

	mui.plusReady(function() {
		plus.geolocation.getCurrentPosition(MapPoint, function(e) {
			mui.toast("error:" + e.message);
		})
	})

	mui.init({
		gestureConfig: {
			tap: true, //默认为true
			doubletap: true, //默认为false 
			longtap: true, //默认为false
			swipe: true, //默认为true
			drag: true, //默认为true
			hold: false, //默认为false，不监听
			release: false //默认为false，不监听
		}
	});
	
	var yc=document.getElementById('yc');
	yc.addEventListener('tap',function(){
		var foot=document.getElementById('foot');
		if(foot.style.display=='none'){
			$('#foot').fadeIn();
			$('#main-foot').css('padding-bottom','60px')
		}else{
			$('#foot').fadeOut();
			$('#main-foot').css('padding-bottom','0')
		}
	})
	

	var IIIS = document.getElementById('iiis');

	IIIS.addEventListener("tap", function() {
		mui.openWindow({
			url: 'https://tech.china.com/article/20190531/kejiyuan0129301574.html',
		});
	},500);

	function MapPoint(position) {
		var Lon = position.coords.longitude; //获取经度
		var Lat = position.coords.latitude; //获取纬度 
		var address = "当前地址：" + position.address.province + "," + position.address.city + "," + position.address.district + "," + position.address.street + "," + position.address.streetNum;
		var Province = position.address.province;
		var City = position.address.city;
		mui('#position')[0].innerHTML = Province + City;
	}
};