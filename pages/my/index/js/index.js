//点击跳转事件
var knowledge = document.getElementById('Knowledge');
knowledge.addEventListener("tap", function() {
	mui.openWindow({
		url: '../knowledge/knowledge.html',
	})
});
var rank = document.getElementById('Rank');
rank.addEventListener("tap", function() {
	mui.openWindow({
		url: '../ranking/rank.html',
	})
});
var msg = document.getElementById('Msg');
msg.addEventListener("tap", function() {
	mui.openWindow({
		url: '../message/message.html',
	})
});
var serve = document.getElementById('Serve');
serve.addEventListener("tap", function() {
	mui.openWindow({
		url: '../serve/serve.html',
	})
});
var set = document.getElementById('Set-up');
set.addEventListener("tap", function() {
	mui.openWindow({
		url: '../setup/setup.html',
	})
});
var edit = document.getElementById('Edit');
edit.addEventListener("tap", function() {
	mui.openWindow({
		url: '../data/data.html',
	})
});
var login = document.getElementById('Login');
login.addEventListener("tap", function() {
	mui.openWindow({
		url: '../../login/index.html',
	})
});
var register = document.getElementById('Register');
register.addEventListener("tap", function() {
	mui.openWindow({
		url: '../../login/reg.html',
	})
});
var yc = document.getElementById('yc');
yc.addEventListener('tap', function() {
	var foot = document.getElementById('foot');
	if(foot.style.display == 'none') {
		$('#foot').fadeIn();
		$('#main-foot').css('padding-bottom', '60px')
	} else {
		$('#foot').fadeOut();
		$('#main-foot').css('padding-bottom', '0')
	}
})