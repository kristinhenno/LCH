$(document).ready(function(){
	var userFeed = new Instafeed({
		get: 'user',
		userId: '1696879779',
		limit:30,
		resolution: 'standard_resolution',
		accessToken: '1696879779.1677ed0.1646f16d5bee48309c584313863c9935',
		sortBy: 'most-recent',
		orientation: 'square',
		template: '<div class="gallery"><div class="instafeed-image-square"><a href="{{link}}" target="_blank"><img class="instaimg" src="{{image}}" alt="{{caption}} class="img-fluid"/></a></div></div>',

	});
	userFeed.run();
})




