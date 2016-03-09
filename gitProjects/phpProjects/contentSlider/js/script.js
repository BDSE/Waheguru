$(document).ready(function(){
	var speed = 500;
	var autoswitch = true;
	var autoswitch_speed = 4000;
	$('.slide').first().addClass('active');
	$('.slide').hide();
	$('.active').show();
	
	$('#next').click(function(){
	$('.active').removeClass('active').addClass('oldactive');
	if($(".oldactive").is(':last-child')){
		$('.slide').first().addClass('active');
	}else{
		$('.oldactive').next().addClass('active');
	}
	$(".oldactive").removeClass("oldactive");
	$(".slide").fadeOut(speed);
	$(".active").fadeIn(speed);
	});
		
		$('#prev').click(function(){
	$('.active').removeClass('active').addClass('oldactive');
	if($(".oldactive").is(':first-child')){
		$('.slide').last().addClass('active');
	}else{
		$('.oldactive').prev().addClass('active');
	}
	$(".oldactive").removeClass("oldactive");
	$(".slide").fadeOut(speed);
	$(".active").fadeIn(speed);
	});
	
	if(autoswitch){
		setInterval(function(){
			$('.active').removeClass('active').addClass('oldactive');
	if($(".oldactive").is(':last-child')){
		$('.slide').first().addClass('active');
	}else{
		$('.oldactive').next().addClass('active');
	}
	$(".oldactive").removeClass("oldactive");
	$(".slide").fadeOut(speed);
	$(".active").fadeIn(speed);
	
		},autoswitch_speed);
	}
});