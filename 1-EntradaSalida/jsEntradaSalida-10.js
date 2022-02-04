/*Comentario
Adriana Maria Davalos Insaurralde
Ejercicio 10*/
/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importeIngresado;
	let importeConDescuento;
	

	importeIngresado = parseInt(document.getElementById("txtIdImporte").value);
	
	
	importeConDescuento = importeIngresado * 0.75;
	
	document.getElementById("txtIdResultado").value = importeConDescuento;

	
}
