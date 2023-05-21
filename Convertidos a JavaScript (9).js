function sin_titulo() {
	var edad, mensaje, sexo, voto;
	document.write("Introduce tu edad:",'<BR/>');
	edad = prompt();
	document.write("Ingrese su sexo (M/F):",'<BR/>');
	sexo = prompt();
	if (edad>=18) {
		voto = " y puedes votar";
	} else {
		voto = " y no puedes votar";
	}
	if (sexo=="M") {
		mensaje = "Eres hombre";
	}
	if (sexo=="F") {
		mensaje = "Eres mujer";
	}
	document.write(mensaje,voto,'<BR/>');
}

