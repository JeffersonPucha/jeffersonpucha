function sin_titulo() {
	var dia;
	document.write("ingrese un dia de la semana",'<BR/>');
	dia = Number(prompt());
	switch (dia) {
	case "lunes":
		document.write("ES UN DIA LABORAL",'<BR/>');
		break;
	case "martes":
		document.write("ES UN DIA LABORAL",'<BR/>');
		break;
	case "miercoles":
		document.write("ES UN DIA LABORAL",'<BR/>');
		break;
	case "jueves":
		document.write("ES UN DIA LABORAL",'<BR/>');
		break;
	case "viernes":
		document.write("ES UN DIA LABORAL",'<BR/>');
		break;
	case "sabado":
		document.write("no es un LABORAL",'<BR/>');
		break;
	case "domingo":
		document.write("no es un LABORAL",'<BR/>');
		break;
	default:
		document.write("escriba correctamente",'<BR/>');
	}
}

