//TP8
// Adriana Maria Davalos Insaurralde

function mostrar()	
{
	let edadIngresada;
	let estadoCivilIngresada;
	
	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivilIngresada =document.getElementById("estadoCivil").value;

	 if (edadIngresada >=18 && estadoCivilIngresada == "Soltero") {

		alert("Es soltero y no es menor");
	 }
	 
}//FIN DE LA FUNCIÓN