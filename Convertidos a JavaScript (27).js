function sin_titulo() {
	var i;
	for (i=1;i<=100;i++) {
		if (i%3==0 && i%2==0) {
			document.write("numeros divisible para 3 y 2 es :",i,'<BR/>');
		} else {
			if (i%2==0) {
				document.write("numeros divisible para 2 es :",i,'<BR/>');
			} else {
				if (i%3==0) {
					document.write("numero divisible para 3 es : ",i,'<BR/>');
				}
			}
		}
	}
}

