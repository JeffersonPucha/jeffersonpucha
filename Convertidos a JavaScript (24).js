function sin_titulo() {
	var doble, i, nu, triple;
	// numeros enteros que siguen a uno ingresado por teclado
	document.write("ingrese un numero",'<BR/>');
	nu = Number(prompt());
	for (i=nu;i<=nu+5;i++) {
		doble = i*i;
		triple = i*i*i;
		document.write("el numero ",i," al cuadrado es ",doble," el cubo es = ",triple,'<BR/>');
	}
}

