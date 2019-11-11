$(document).ready(function() {
  var userFeed = new Instafeed({
    get: "user",
    userId: "1696879779",
    limit: 30,
    resolution: "standard_resolution",
    accessToken:
      "1696879779.1677ed0.f3471eb02120436c9fb861669842884b",
    sortBy: "most-recent",
    orientation: "square",
    template:
      '<div class="gallery"><div class="instafeed-image-square"><a href="{{link}}" target="_blank"><img class="instaimg" src="{{image}}" alt="{{caption}} class="img-fluid"/></a></div></div>'
  });
  userFeed.run();
});
