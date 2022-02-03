/*Comentario
Adriana Maria Davalos Insaurralde
Ejercicio 4* version mejorada/
/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombreIngresado;

	nombreIngresado= prompt("Ingrese su Nombre");

	document.getElementById("txtIdNombre").value = nombreIngresado;

	
}

