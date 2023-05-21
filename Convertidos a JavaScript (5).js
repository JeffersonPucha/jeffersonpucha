function sin_titulo() {
	var radio = new Number();
	var area = new Number();
	document.write("Ingrese el radio del circulo:",'<BR/>');
	radio = Number(prompt());
	area = 3.1416*Math.pow(radio,2);
	document.write("El area del circulo es:",area,'<BR/>');
}

