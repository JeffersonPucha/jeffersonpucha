// Ejercicio 2: Determinar si un alumno aprueba o reprueba un curso, sabiendo que
// aprobar� si su promedio de tres calificaciones es mayor o igual a 70
// reprueba caso contrario. (Diagrama de Flujo)
Algoritmo ejercicio2
	Definir nota1,nota2,nota3 como reales
	Definir promedio como real
	Escribir "Digite las 3 calificaciones: "
	Leer nota1,nota2,nota3
	promedio <- (nota1+nota2+nota3)/3
	Si promedio>=70 Entonces
		Escribir "El alumno esta aprobado con: ",promedio
	SiNo
		Escribir "El alumni esta desaprobado con: ",promedio
	FinSi
FinAlgoritmo