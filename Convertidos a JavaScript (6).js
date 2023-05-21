function sin_titulo() {
	var base = new Number();
	var altura = new Number();
	var area = new Number();
	document.write("Ingrese la base del triangulo:",'<BR/>');
	base = Number(prompt());
	document.write("Ingrese la altura del triangulo:",'<BR/>');
	altura = Number(prompt());
	area = (base*altura)/2;
	document.write("El area del triangulo es:",area,'<BR/>');
}

