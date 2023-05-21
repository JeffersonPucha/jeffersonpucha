function sin_titulo() {
	var i, t;
	// Mostrar las tablas de multiplicar
	// de cualquier numero ingresado por teclado
	document.write("Para Obtener las Tablas De Multiplicar",'<BR/>');
	document.write("ingrese un numero",'<BR/>');
	t = prompt();
	for (i=1;i<=12;i++) {
		document.write(t," * ",i," = ",i*t,'<BR/>');
	}
}

