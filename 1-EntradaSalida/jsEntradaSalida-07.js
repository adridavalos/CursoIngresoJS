/*Comentario
Adriana Maria Davalos Insaurralde
Ejercicio 7*/
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let primerNumero;
	let segundoNumero;
	let sumar;
	let mensaje;

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);

	segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);

	sumar = primerNumero + segundoNumero;

	mensaje = "La suma es " + sumar; 

	alert(mensaje);	
}

function restar()
{
	let primerNumero;
	let segundoNumero;
	let restar;
	let mensaje;

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);

	segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);

	restar = primerNumero - segundoNumero;
	mensaje = "la resta es " + restar;

	alert( mensaje);
}

function multiplicar()
{ 
	let primerNumero;
	let segundoNumero;
	let multiplicar;
	let mensaje;

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);

	segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);

	multiplicar = primerNumero * segundoNumero;

	mensaje = "La multipricacion es " + multiplicar;

	alert(mensaje);
}

function dividir()
{
	let primerNumero;
	let segundoNumero;
	let dividir;
	let mensaje;

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);

	segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);

	dividir = primerNumero / segundoNumero;

	mensaje = "La division " + dividir;

	alert(mensaje);
}

