//Ejercicio 1: Calcular la suma de Los "N" primeros n�meros.

Proceso ejercicio1
	Definir N, suma, i como entero;
	
	Escribir "Digite la cantidad de numeros a sumarse: ";
	Leer N;
	
	suma <- 0;
	
	Para i<-1 Hasta N Con Paso 1 Hacer
		suma <- suma + i;
	FinPara
	
	Escribir "La suma es: ", suma;
FinProceso