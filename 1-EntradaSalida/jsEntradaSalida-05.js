/*Comentario
Adriana Maria Davalos Insaurralde
Ejercicio 5*/
/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	/*
	EJERCICIO ANTERIOR
	
	let nombre;
	let edad;
	let mensaje;

	nombre = document.getElementById("txtIdNombre").value;
	
	edad =document.getElementById("txtIdEdad").value;

	mensaje = `Usted se llama ${nombre} y tiene ${edad} años`;
	
	alert(mensaje);*/

	// NUEVO EJERCICIO

	let nombre;
	let edad;
	let ingresarApellido;
	let mensaje;

	nombre = document.getElementById("txtIdNombre").value;
	
	edad =document.getElementById("txtIdEdad").value;

	ingresarApellido = prompt("Ingrese su apellido");

	mensaje = `${ingresarApellido}, usted se llama ${nombre} y tiene ${edad} años`;
	alert(mensaje);
}
