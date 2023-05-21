function sin_titulo() {
	var as, i;
	document.write("resta",'<BR/>');
	document.write("ingrese un numero",'<BR/>');
	as = prompt();
	for (i=1;i<=12;i++) {
		document.write(as,"-",i,"=",as-i,'<BR/>');
	}
}

