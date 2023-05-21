function sin_titulo() {
	var n;
	// Ingrese un numero y Determine si s Par o Impar
	document.write("Ingrese un numero",'<BR/>');
	n = prompt();
	if (n%2==0) {
		document.write(n," es par ",'<BR/>');
	} else {
		document.write(n," es impar ",'<BR/>');
	}
}

