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
	/*EJERCICIO UNO
	let importeIngresado;
	let importeConDescuento;
	
	importeIngresado = parseInt(document.getElementById("txtIdImporte").value);
	

	importeConDescuento = importeIngresado * 0.75;
	
	document.getElementById("txtIdResultado").value = importeConDescuento;*/

	//EJERCICIO 10Bis1
	/*let importeIngresado;
	let porcentajeDescuentoIngresado;
	let aplicacionDescuento;


	importeIngresado = parseInt(document.getElementById("txtIdImporte").value);

	porcentajeDescuentoIngresado = parseInt(prompt("Ingrese porcentaje de descuesto"));

	aplicacionDescuento = importeIngresado * (1 - (porcentajeDescuentoIngresado / 100));

	document.getElementById("txtIdResultado").value = aplicacionDescuento*/

	//EJERCIOCIO 10Bis2

	let importeIngresado;
	let nombreProductoIngresado;
	let porcentajeDescuentoIngresado;
	let aplicacionDescuento;
	let mensaje;

	importeIngresado = parseInt(document.getElementById("txtIdImporte").value);

	nombreProductoIngresado = prompt("Ingrese nombre del producto");
	
	porcentajeDescuentoIngresado = parseFloat(prompt("Ingrese porcentaje de descuento"));

	aplicacionDescuento = importeIngresado * (1-(porcentajeDescuentoIngresado/100));

	document.getElementById("txtIdResultado").value = aplicacionDescuento;
	
	mensaje = "Usted compro " + nombreProductoIngresado + " con " + porcentajeDescuentoIngresado + "%  de descuento" + "\n" +

	"El precio final es " +aplicacionDescuento

	alert(mensaje);
	
}
