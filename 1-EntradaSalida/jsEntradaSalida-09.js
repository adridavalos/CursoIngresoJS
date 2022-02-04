/*Comentario
Adriana Maria Davalos Insaurralde
Ejercicio 9*/
/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldoIngrsado;
	let sueldoAumentadoDiezPorCiento;
	
	sueldoIngrsado = parseInt(document.getElementById("txtIdSueldo").value);

	sueldoAumentadoDiezPorCiento = sueldoIngrsado + sueldoIngrsado * 0.1;

	document.getElementById("txtIdResultado").value = sueldoAumentadoDiezPorCiento;

}
