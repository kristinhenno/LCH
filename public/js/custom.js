$(document).ready(function(){
	var userFeed = new Instafeed({
		get: 'user',
		userId: '1696879779',
		limit:30,
		resolution: 'standard_resolution',
		accessToken: '1696879779.1677ed0.10f054e784054e73a660e653e762bbee',
		sortBy: 'most-recent',
		template: '<div class="gallery"><a href="{{link}}" target="_blank"><img class="instaimg" src="{{image}}" alt="{{caption}} class="img-fluid"/></a></div>'
	});
	userFeed.run();
})