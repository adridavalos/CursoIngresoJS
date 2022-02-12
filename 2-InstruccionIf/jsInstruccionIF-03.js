//TP3 if
//Adriana Maria Davalos Insaurralde

function mostrar()
{
	let edadIngresado;
	edadIngresado= parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresado >= 18) {
		
		alert("Es mayor de edad");
	}
	else {

		alert ("Es menor de edad");
	}
}//FIN DE LA FUNCIÓN