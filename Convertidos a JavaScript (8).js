function sin_titulo() {
	var mayor, num1, num2, num3;
	document.write("Introduce los datos a comparar: ",'<BR/>');
	num1 = prompt();
	num2 = prompt();
	num3 = prompt();
	mayor = num1;
	if (num2>mayor) {
		mayor = num2;
	}
	if (num3>mayor) {
		mayor = num3;
	}
	document.write("El mayor es: "+mayor,'<BR/>');
}

