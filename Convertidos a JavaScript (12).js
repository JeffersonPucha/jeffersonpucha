function sin_titulo() {
	var n;
	// Ingrese un numero y Determine si es multiplo de 
	document.write("Ingrese un numero",'<BR/>');
	n = prompt();
	if (n%3==0) {
		document.write(n," es multiplo de 3 ",'<BR/>');
	} else {
		document.write(n," no es multiplo de 3 ",'<BR/>');
	}
}

