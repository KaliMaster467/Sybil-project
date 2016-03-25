<%-- 
    Document   : INDEX
    Created on : Mar 24, 2016, 11:45:46 PM
    Author     : AlbertoReyes
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Sybil</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="estilos/estilo.css">
	
	<script src="http://code.jquery.com/jquery-1.12.1.min.js"></script>
	<script src="http://code.jquery.com/color/jquery.color-2.1.2.min.js"></script>
	<script src="Js/index.js"></script>
</head>
<body>
	<header class="main-container">
		<nav class="navbar">
			<ul class="lista-nav" id="lista-navigation">
				<li class="brand"><a href="index.html">Sybil</a></li>
				<li class="icon-bar"><span><img src="imagenes/responsive.png"></span></li>
				<li class="log-in"><a  href="Iniciar_Sesion.html">Log-in</a></li>
				<li class="inicio"><a href="#secDos">Conócenos</a></li>
				<li class="soporte"><a  href="">Soporte</a></li>
			</ul>
		</nav>
		<section class="primer-texto">
			<img src="imagenes/casa.png" class="ladron-icon">
			<article class="descripcion">
				<h1 class="titulo">No dejes que se metan con tus cosas.</h1>
				<p class="primer-parrafo">
					Protege tus pertenencias desde tu movil, con el mejor sistema de vigilancia con la App en tu Smarthphone. 
				</p>
				<br>
				<input class="btn-ini" type="button" value="Inicia">
				<input class="btn-ini btn-reg-acc" type="button" value="Registrate">
				<br>
				<br>
				<br>
			</article>
		</section>
	</header>
	<section class="section-dos" id="secDos">
		<article class="primera-descripcion">
			<img src="imagenes/ladron.png" class="ladroncito">
			<table>
				<tr class="first-row">
					<td id="anuncio">
						<hgroup class="titulos-tables"><h1>Evita que haya intrusos en tu hogar..</h1></hgroup>
						<p>
							Mantente alertado en cualquier hora, en cualquier lugar gracias a nuestro sitema de localización y video, tu casa jamas estara segura, si no nos crees, pruebalo.
						</p>						
					</td>
					<td id="anuncio-dos">
						<hgroup class="titulos-tables"><h1>Tu hogar nunca estuvo mas seguro..</h1></hgroup>
						<p>
							Mantente alertado en cualquier hora, en cualquier lugar gracias a nuestro sitema de localización y video, tu casa jamas estara segura, si no nos crees, pruebalo.
						</p>							
					</td>
				</tr>
			</table>
		</article>
	</section>
	<section class = "section-cuatro">
		<img src="imagenes/policia.png" class="policia">
		<article class="alado-del-poli">
			<hgroup class="poli">
				<h1>
					La policía nos ayuda.. 
				</h1>
			</hgroup>
			<p class="des-poli">
				Con el apoyo de la policía mantenemos tu hogar a salvo bajo cualquier situacion, ya que automaticamente, se les da una alerta de que esta ocurriendo algo, asì, sufriran las consecuencias de sus actos.
				
			</p>
		</article>		
	</section>
	<section class="section-tres">
		<div class="desenfoque">
			<article class="app-promo">
				<img src="imagenes/ping.png" class="ping">
				<hgroup class="app-title">
					<h1>Este más tranquilo con la App.</h1>
				</hgroup>
				<img src="imagenes/app.svg" class="appstore">
			</article>
		</div>
	</section>
</body>
</html>
