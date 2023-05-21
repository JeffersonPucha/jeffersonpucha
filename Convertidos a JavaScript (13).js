function sin_titulo() {
	var n1, n2, s;
	// ingrese dos numeros para luego indicar si
	// la suma es =24?
	n1 = 0;
	n2 = 0;
	s = 0;
	document.write("Ingrese primer numero",'<BR/>');
	n1 = Number(prompt());
	document.write("Ingrese segundo numero",'<BR/>');
	n2 = Number(prompt());
	s = n1+n2;
	if (s==24) {
		document.write("la suma de ",n1," y ",n2," = ","24",'<BR/>');
	} else {
		document.write("no es igual a 24",'<BR/>');
	}
}

