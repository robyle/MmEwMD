/**
 * JQuery Scroll Border 插件
 */
(function($) {
	$.fn.extend({
		ScrollNews : function(opt, callback) {
			if (opt == null) {
				opt = {};
			}
			var firstElement = this.eq(0).find("ul:first");
			var lineHeight = firstElement.find("li:first").height();
			var scrollRowNum = opt.line ? parseInt(opt.line, 10) : parseInt(
					this.height() / lineHeight, 10);
			var scrollSpeed = opt.speed ? parseInt(opt.speed, 10) : 500;
			var scrollInterval = opt.interval ? parseInt(opt.interval, 10)
					: 2000;
			if (scrollRowNum <= 0) {
				scrollRowNum = 1;
			}
			var offsetH = 0 - scrollRowNum * lineHeight;
			scrollUp = function() {
				firstElement.animate({
					marginTop : offsetH
				}, scrollSpeed, function() {
					for (var i = 1; i <= scrollRowNum; i++) {
						firstElement.find("li:first").appendTo(firstElement);
					}
					firstElement.css({
						marginTop : 0
					});
				});
			};
			var timerId = null;
			firstElement.hover(function() {
				if (timerId != null) {
					clearInterval(timerId);
				}
			}, function() {
				timerId = setInterval("scrollUp()", scrollInterval);
			}).mouseout();
		}
	});
})(jQuery);