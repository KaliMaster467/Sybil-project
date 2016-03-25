		$(document).ready(function(){

			//Varibles del ancho y alto.
			var w = $(window).width();
			var h = $(window).height();
			//Efeco shido.
			$(".navbar").hide().fadeIn(2000);
			$(".descripcion").slideDown();
			//dar las dimensiones.
			$(".main-container").width(w).height(h);
			$(".section-dos").width(w).height(h/1.5);
			$(".section-tres").width(w).height(h/1.5);	

			//Se actualiza cuando se reacomoda la pantalla.			
			//convierte hexadecimal con opacidad.
			function convertHex(hex,opacity){
    			hex = hex.replace('#','');
    			r = parseInt(hex.substring(0,2), 16);
    			g = parseInt(hex.substring(2,4), 16);
    			b = parseInt(hex.substring(4,6), 16);
    			result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    			return result;
			}	
			//Efecto del
			var color = convertHex("#A81818", 60);
			var colorUno = convertHex("#FFFFFF", 00);
			$(".btn-ini").hover(
				function(){
					$(this).animate({backgroundColor:color}, "fast");
				}, function(){
					$(this).animate({backgroundColor:colorUno}, "fast");
				}
			);
			var colornav = convertHex("#A81818", 60);
			var colorUnonav = convertHex("#FFFFFF", 100);
			$(".lista-nav li a").hover(
				function(){
					$(this).animate({color:colornav}, "fast");
				}, function(){
					$(this).animate({color:colorUnonav}, "fast");
				}
			);
			var colorTablaUno = convertHex("#A81818", 100);
			var colorTablaDos = convertHex("#FFFFFF", 00);
			$("td").hover(
				function(){
					$(this).animate({backgroundColor:colorTablaUno}, "fast");
					$("#anuncio p").addClass("letra-table");
					$("#anuncio").addClass("letra-table");

				}, function(){
					$(this).animate({backgroundColor:colorTablaDos}, "fast");
									
				}
			);
			var colornav = convertHex("#A81818", 60);
			var colorUnonav = convertHex("#FFFFFF", 100);
			$(".lista-nav li a").hover(
				function(){
					$(this).animate({color:colornav}, "fast");
				}, function(){
					$(this).animate({color:colorUnonav}, "fast");
				}
			);			

	   		var scroll_start = 0;
   			var startchange = $('#secDos');
   			var offset = startchange.offset();
   			$(document).scroll(function() { 
      			scroll_start = $(this).scrollTop();
      			if(scroll_start > offset.top) {
          			$("nav").removeClass("navbar");
          			$("nav").addClass("navbarcero");
          			$("#lista-navigation").removeClass("lista-nav");
          			$("#lista-navigation").addClass("lista-navDos");
          			$("#lista-navigation li a").addClass("links-abajo");
       			
          			
      			} else {
      				$("nav").removeClass("navbarcero");
          			$("nav").addClass("navbar");
          			$("#lista-navigation").removeClass("lista-navDos");
          			$("#lista-navigation").addClass("lista-nav");
          			$("#lista-navigation li a").removeClass("links-abajo");
          			           			
       			}
   			});

   			$(".btn-ini").click(function(){
   				window.location.assign("Iniciar_Sesion.html");
   			});
   			$(".btn-reg-acc").click(function(){
   				window.location.assign("Registro.html")
   			});
			$(window).resize(function(){
				var w = $(window).width();
				var h = $(window).height();
				
				$(".main-container").width(w).height(h);
				$(".section-dos").width(w).height(h/1.5);
				$(".section-tres").width(w).height(h/1.5);	

	   			var scroll_start = 0;
   				var startchange = $('#secDos');
   				var offset = startchange.offset();			
			});   							
		});