function sin_titulo() {
	var i, n;
	document.write("ingrese la contraseña",'<BR/>');
	do {
		i = i+1;
		n = prompt();
	} while (!(i==3 || n==("123456")));
}

