function sin_titulo() {
	var division, valor1, valor2;
	valor1 = Number(prompt());
	valor2 = Number(prompt());
	if (valor1>valor2) {
		division = valor1/valor2;
	} else {
		division = valor2/valor1;
	}
	document.write(division,'<BR/>');
}

