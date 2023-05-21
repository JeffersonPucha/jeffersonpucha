function sin_titulo() {
	var i, n, suma, sumaimp, sumapar;
	i = 1;
	while (i<=10) {
		n = prompt();
		suma = suma+n;
		if (n%2==0) {
			sumapar = sumapar+n;
		} else {
			sumaimp = sumaimp+n;
		}
		i = i+1;
	}
	document.write("la suma total es =",suma,'<BR/>');
	document.write("la suma de los pares =",sumapar,'<BR/>');
	document.write("la suma de los impares =",sumaimp,'<BR/>');
}

