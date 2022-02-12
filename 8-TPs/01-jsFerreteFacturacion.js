/* TP 1
Alumna = Adriana Maria Davalos Insaurralde*/
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let primerPrecio;
    let segundoPrecio;
    let tercerPrecio;
    let suma;
    
    primerPrecio = parseFloat(document.getElementById("txtIdPrecioUno").value);

    segundoPrecio = parseFloat(document.getElementById("txtIdPrecioDos").value);

    tercerPrecio = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = primerPrecio + segundoPrecio +tercerPrecio;

    alert("La suma es $ " + suma);
}
function Promedio () 
{
	let primerPrecio;
    let segundoPrecio;
    let tercerPrecio;
    let suma;
    let promedio;
    
    primerPrecio = parseFloat(document.getElementById("txtIdPrecioUno").value);

    segundoPrecio = parseFloat(document.getElementById("txtIdPrecioDos").value);

    tercerPrecio = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    suma = primerPrecio + segundoPrecio +tercerPrecio;

    promedio = suma / 3;

    promedio =  promedio.toFixed(2);

    alert("El promedio es " + promedio);
}
function PrecioFinal () 
{
	let primerPrecio;
    let segundoPrecio;
    let tercerPrecio;
    let suma;
    let precioFinal;
    
    primerPrecio = parseFloat(document.getElementById("txtIdPrecioUno").value);

    segundoPrecio = parseFloat(document.getElementById("txtIdPrecioDos").value);

    tercerPrecio = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    suma = primerPrecio + segundoPrecio +tercerPrecio;

    precioFinal = suma *(1+0.21);

    precioFinal = precioFinal.toFixed(2);

    alert("El precio final es " + precioFinal);

}