/* TP 2
Alumna = Adriana Maria Davalos Insaurralde
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerrenoIngresado;
    let anchoTerrenoIngresado;
    let perimetroRectangulo;
    let cantidadTotalAlambre;

    largoTerrenoIngresado = parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerrenoIngresado = parseFloat(document.getElementById("txtIdAncho").value);
    
    perimetroRectangulo =(2 * largoTerrenoIngresado) + (2 * anchoTerrenoIngresado);

    cantidadTotalAlambre = perimetroRectangulo * 3;
    
    alert ("Se necesitan " + cantidadTotalAlambre + " metros de alambre" );

} 

function Circulo () 
{
	let radioTerrenoIngresado;
    let perimetroCircular;
    let cantidadTotalAlambre;

    radioTerrenoIngresado = parseFloat(document.getElementById("txtIdRadio").value);

    perimetroCircular = 2 * 3.14 * radioTerrenoIngresado;

    cantidadTotalAlambre = 3 * perimetroCircular;

    alert ("Se necesitan " + cantidadTotalAlambre + " metros de alambre" );

}

function Materiales () 
{
	let largoTerrenoIngresado;
    let anchoTerrenoIngresado;
    let areaRectangular;
    let cemento;
    let cal;
    let mensaje;

    largoTerrenoIngresado = parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerrenoIngresado = parseFloat(document.getElementById("txtIdAncho").value);
     
    areaRectangular = largoTerrenoIngresado * anchoTerrenoIngresado;
    
    cemento = areaRectangular * 2;
    cal = areaRectangular * 3;

    mensaje = "Para un contrapiso de " + areaRectangular +" m2 " + "se necesitan " + "\n" +
    cemento + " bolsas de cemento y " + cal + " bolsas de cal";

    alert(mensaje);

}