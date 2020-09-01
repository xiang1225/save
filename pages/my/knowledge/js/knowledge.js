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