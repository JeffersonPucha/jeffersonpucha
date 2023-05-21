function sin_titulo() {
	var i, q;
	document.write("suma",'<BR/>');
	document.write("ingrese un numero",'<BR/>');
	q = prompt();
	for (i=1;i<=12;i++) {
		document.write(q,"+",i,"=",i+q,'<BR/>');
	}
}

