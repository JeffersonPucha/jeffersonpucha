function sin_titulo() {
	var importe, mes, total;
	document.write("escribe el importe de la compra",'<BR/>');
	importe = Number(prompt());
	document.write("Introduce el mes",'<BR/>');
	mes = prompt();
	// Si el mes es octubre, se aplicara el descuento
	if ((mes=="octubre")) {
		total = importe*0.85;
	} else {
		total = importe;
	}
	document.write(total,'<BR/>');
}

