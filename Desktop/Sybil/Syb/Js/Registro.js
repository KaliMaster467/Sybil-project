$(document).ready(function(){
	function convertHex(hex,opacity){
    	hex = hex.replace('#','');
    	r = parseInt(hex.substring(0,2), 16);
    	g = parseInt(hex.substring(2,4), 16);
    	b = parseInt(hex.substring(4,6), 16);
    	result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    	return result;
	}		
	var w = $(window).width();
	var h = $(window).height();	
	$("header").width(w).height(h);	
	$(window).resize(function(){
	var w = $(window).width();
	var h = $(window).height();

	$("header").width(w).height(h);
	var colorRegUno = convertHex("#2E65DC", 90);
	var colorRegDos = convertHex("#FFFFFF", 100);		
	$(".lista-nav li a").hover(
		function(){
			$(this).animate({color:colorRegUno}, "fast");
		}, function(){
			$(this).animate({color:colorRegDos}, "fast");
		}
	);			
	});
	var colorRegUno = convertHex("#2E65DC", 90);
	var colorRegDos = convertHex("#FFFFFF", 100);		
	$(".lista-nav li a").hover(
		function(){
			$(this).animate({color:colorRegUno}, "fast");
		}, function(){
			$(this).animate({color:colorRegDos}, "fast");
		}
	);
	if($("nav:first").is(":hidden")){
		$("nav").slideDown("slow");
	}	
});