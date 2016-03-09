$(document).ready(function(){
	$(".toggle").click(function(){
		$(this).toggleClass("selected");
		var activediv = $(this).html();
		$("#"+activediv+"container").toggle();
	});
	calHeight();
});
var calHeight = function(){
	var windowheight = $(window).height();
	var topbar=$("#topbar").height();
	var remht = windowheight-topbar;
	$(".codecontainer").height(remht);
}
