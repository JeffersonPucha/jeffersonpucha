Algoritmo ejercicio6
	Definir precioK,Kilos,precioI como real
	Definir descuento,precio_final como real
	Escribir "Cuanto cuesta el kilo de manzanas? "
	Leer precioK
	Escribir "Cuantos kilos de manzana a comprado? "
	Leer Kilos
	precioI <- precioK * Kilos
	Si Kilos>=0 y Kilos<=2 Entonces
		descuento <- 0
	SiNo
		Si Kilos>=2.01 y Kilos<=5 Entonces
			descuento <- precioI*0.1
		SiNo
			Si Kilos>=5.01 y Kilos<=10 Entonces
				descuento <- precioI*0.15
			SiNo
				descuento <- precioI*0.2
			FinSi
		FinSi
	FinSi
	precio_final <- precioI - descuento
	Escribir "El precio a pagar es: $",precio_final
FinAlgoritmo
