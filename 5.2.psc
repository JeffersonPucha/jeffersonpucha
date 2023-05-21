Algoritmo sin_titulo
	Escribir "Introduce los datos a comparar: "
	Leer num1
	Leer num2
	Leer num3
	
	mayor = num1
	
	Si num2 > mayor Entonces
		mayor = num2
	Fin Si
	
	Si num3 > mayor Entonces
		mayor = num3
	Fin Si
	
	Imprimir "El mayor es: " + mayor
FinAlgoritmo
