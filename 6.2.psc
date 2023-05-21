Algoritmo sin_titulo
	Escribir "Introduce tu edad:"
	Leer edad
	Escribir "Ingrese su sexo (M/F):"
	Leer sexo
	
	Si edad >= 18 Entonces
		voto = " y puedes votar"
	SiNo
		voto = " y no puedes votar"
	Fin Si
	
		Si sexo = "M" Entonces
			mensaje = "Eres hombre"
			Finsi
		
		Si sexo = "F" Entonces
		mensaje = "Eres mujer"
	Fin Si
	
	Escribir mensaje voto 

FinAlgoritmo
