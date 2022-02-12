// TP3 
//Adriana Maria Davalos Insaurralde
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaFah;
    let temperaturaCen;
    
    temperaturaFah = parseFloat(document.getElementById("txtIdTemperatura").value);

    temperaturaCen =(temperaturaFah -32) /1.8;

    alert(temperaturaFah + " Fahrenheit " + " son " + temperaturaCen + " Centigrados" );

}

function CentigradosFahrenheit () 
{
	let temperaturaCen;
    let temperaturaFah;
    
    temperaturaCen = parseFloat(document.getElementById("txtIdTemperatura").value);

    temperaturaFah = temperaturaCen * 1.8 + 32;

    alert(temperaturaCen + " Centigrados " + " son " + temperaturaFah + " Fahrenheit" );

}
