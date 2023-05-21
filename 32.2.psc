Algoritmo sin_titulo
	definir numero, factorial, contador como entero
	escribir "Ingrese un número:"
	leer numero
	si numero < 0 entonces
		escribir "Error: el número debe ser mayor o igual a cero."
	
fin si
factorial = 1
contador = 1
mientras contador <= numero hacer
    factorial = factorial * contador
    contador = contador + 1
fin mientras
escribir "El factorial de ", numero, " es ", factorial

FinAlgoritmo
