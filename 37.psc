// Ejercicio 6: Calcular la siguiente sumatoria de Los "N" elementos:
// S = 1 + 4 + 9 + ...
Algoritmo ejercicio6
	Definir n_elementos Como Entero
	Definir i,suma Como Entero
	Escribir 'Digite la cantidad de elementos a sumarse: '
	Leer n_elementos
	i <- 1
	suma <- 0
	Mientras i<=n_elementos Hacer
		suma <- suma+i^2
		i <- i + 1
	FinMientras
	Escribir "La suma es: ",suma
FinAlgoritmo
