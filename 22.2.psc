Algoritmo sin_titulo
	Repetir
		Escribir "ingrese nombre del estudiante"
		Leer nom1
		Escribir "digite nota pactica (10%)"
		Leer np
		Si np<=1 Entonces
			Escribir "digite nota problema (50%)"
			Leer npr
			si npr<=5 Entonces
				Escribir "digite nota teorica(40%)"
				Leer nt
				si nt<=4 Entonces
					re=np+npr+nt
					Mostrar "nota final de ",nom1," es igual a ",re
				Sino
					Mostrar "esta fuera de rango la nota teorica "
				FinSi
			Sino
				Mostrar "esta fuera de rango la nota problema "
			FinSi
		Sino
			Mostrar "esta fuera de rango la nota practica"
		Fin Si
	Hasta Que nom1=("")
FinAlgoritmo
