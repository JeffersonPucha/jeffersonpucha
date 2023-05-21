function sin_titulo() {
	var nom1, np, npr, nt, re;
	do {
		document.write("ingrese nombre del estudiante",'<BR/>');
		nom1 = prompt();
		document.write("digite nota pactica (10%)",'<BR/>');
		np = prompt();
		if (np<=1) {
			document.write("digite nota problema (50%)",'<BR/>');
			npr = prompt();
			if (npr<=5) {
				document.write("digite nota teorica(40%)",'<BR/>');
				nt = prompt();
				if (nt<=4) {
					re = np+npr+nt;
					document.write("nota final de ",nom1," es igual a ",re,'<BR/>');
				} else {
					document.write("esta fuera de rango la nota teorica ",'<BR/>');
				}
			} else {
				document.write("esta fuera de rango la nota problema ",'<BR/>');
			}
		} else {
			document.write("esta fuera de rango la nota practica",'<BR/>');
		}
	} while (nom1!=(""));
}

