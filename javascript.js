	var hoy= new Date();    //se crean los objetos para la hora
	var dia=hoy.getDay();
	var h = hoy.getHours();
	var m = hoy.getMinutes();
	var s = hoy.getSeconds();
	
	function f1(){        //funcion para que al pulsar un boton aparezca la hora
	hoy = new Date();
	s = hoy.getSeconds();
	document.getElementById('reloj').innerHTML = h+":"+m+":"+s;
	document.geetElementsByTagName('td')[s].style.border="4px solid red";
	}
	function f2(){         //funcion que remarca la asignatura al pulsar un boton que esta en html(lo mismo para las siguientes)
		for(var i=0; i<4; i++){
		document.getElementsByClassName("matemáticas")[i].style.color="yellow";
		document.getElementsByClassName("matemáticas")[i].style.fontStyle="italic";
		document.getElementsByClassName("matemáticas")[i].style.borderRadius="25px";
		}
	}
	function f3(){
			for(var i=0; i<4; i++){
			document.getElementsByClassName("Dibujo")[i].style.color="yellow";
			document.getElementsByClassName("Dibujo")[i].style.fontStyle="italic";
			document.getElementsByClassName("Dibujo")[i].style.borderRadius="25px";
			}
		}

	function f4(){
		for(var i=0; i<3; i++){
			document.getElementsByClassName("TIC")[i].style.color="yellow";
			document.getElementsByClassName("TIC")[i].style.fontStyle="italic";
			document.getElementsByClassName("TIC")[i].style.borderRadius="25px";
		}
	}
		function f5(){
		for(var i=0; i<4; i++){
			document.getElementsByClassName("Lengua")[i].style.color="yellow";
			document.getElementsByClassName("Lengua")[i].style.fontStyle="italic";
			document.getElementsByClassName("Lengua")[i].style.borderRadius="25px";
		}
	}
		function f6(){
		for(var i=0; i<4; i++){
			document.getElementsByClassName("física")[i].style.color="yellow";
			document.getElementsByClassName("física")[i].style.fontStyle="italic";
			document.getElementsByClassName("física")[i].style.borderRadius="25px";
		}
	}
		function f7(){
		for(var i=0; i<4; i++){
			document.getElementsByClassName("Tecnología")[i].style.color="yellow";
			document.getElementsByClassName("Tecnología")[i].style.fontStyle="italic";
			document.getElementsByClassName("Tecnología")[i].style.borderRadius="25px";
		}
	}
		function f8(){
		for(var i=0; i<4; i++){
			document.getElementsByClassName("Historia")[i].style.color="yellow";
			document.getElementsByClassName("Historia")[i].style.fontStyle="italic";
			document.getElementsByClassName("Historia")[i].style.borderRadius="25px";
		}
	}
		function f9(){
		for(var i=0; i<3; i++){
			document.getElementsByClassName("Inglés")[i].style.color="yellow";
			document.getElementsByClassName("Inglés")[i].style.fontStyle="italic";
			document.getElementsByClassName("Inglés")[i].style.borderRadius="25px";
		}
	}
		
