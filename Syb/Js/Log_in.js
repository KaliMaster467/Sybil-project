$(document).ready(function(){

	var h = $(window).height();
	var w = $(window).width();
	$("header").width(w).height(h);
	function convertHex(hex,opacity){
    	hex = hex.replace('#','');
    	r = parseInt(hex.substring(0,2), 16);
    	g = parseInt(hex.substring(2,4), 16);
    	b = parseInt(hex.substring(4,6), 16);
    	result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    	return result;
	}	
	var color = convertHex("#01E611", 50);
	var colorUno = convertHex("#FFFFFF", 20);
	$(".btn-ingresa").hover(
		function(){
			$(this).animate({backgroundColor:color}, "fast");
		}, function(){
			$(this).animate({backgroundColor:colorUno}, "fast");
		}
	);
	var colornav = convertHex("#01E611", 60);
	var colorUnonav = convertHex("#FFFFFF", 100);
	$(".lista-nav li a").hover(
		function(){
			$(this).animate({color:colornav}, "fast");
		}, function(){
			$(this).animate({color:colorUnonav}, "fast");
		}
	);		

	if($("nav:first").is(":hidden")){
		$("nav").slideDown("slow");
	}
	
	$(".form-container").hide().fadeIn(1000);

	$(window).resize(function(){
	var h = $(window).height();
	var w = $(window).width();

	$("header").width(w).height(h);			
	});

});