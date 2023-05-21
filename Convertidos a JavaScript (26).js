function sin_titulo() {
	var c, c1, c2, c3, c4, i, l, longitud{text}, text;
	document.write("ingrese un texto",'<BR/>');
	text = prompt();
	for (i=1;i<=text.length;i++) {
		l = String.substring(text,i-1,i);
		if (l=="a") {
			c = c+1;
		} else {
			if (l=="e") {
				c1 = c1+1;
			} else {
				if (l=="i") {
					c2 = c2+1;
				} else {
					if (l=="o") {
						c3 = c3+1;
					} else {
						if (l=="u") {
							c4 = c4+1;
						}
					}
				}
			}
		}
	}
	document.write("la cantidad de a =",c,'<BR/>');
	document.write("la cantidad de e =",c1,'<BR/>');
	document.write("la cantidad de i =",c2,'<BR/>');
	document.write("la cantidad de o =",c3,'<BR/>');
	document.write("la cantidad de u =",c4,'<BR/>');
}

