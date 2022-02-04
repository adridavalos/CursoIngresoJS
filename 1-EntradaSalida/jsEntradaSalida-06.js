/*Comentario
Adriana Maria Davalos Insaurralde
Ejercicio 6*/
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let primerNumero;
	let segundoNumero;
	let resultado;
	let mensaje;
	


	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value); 
	


	segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);


	resultado = primerNumero + segundoNumero;

	mensaje = `La suma es ${resultado}`

	
	alert(mensaje);


};

