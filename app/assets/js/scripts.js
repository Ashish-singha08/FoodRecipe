$(document).ready(function() {
	var menuButton = $(".header__button");
	menuButton.click(function(e) {
		var main = $(".main");
		var header = $(".header");
  		if (main.hasClass("active") && header.hasClass("active")) {
			$(".header, .main").toggleClass("active");
		} else if (!main.hasClass("active") && header.hasClass("active")) {
			header.removeClass("active");
		} else {
			$(".header, .main").toggleClass("active");
		}
	});
});
