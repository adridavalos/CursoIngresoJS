// TP 6
// Adriana Maria Davalos Insaurralde
function mostrar()
{
	let edadIngresado;
	edadIngresado = parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresado >= 18) {
		
		alert("Es mayor de edad");
	}

	else{

		if (edadIngresado >= 13 && edadIngresado <= 17) {

			alert("Es adolescente");
		}
	
		else { 
	
			alert("Es un niño");
		}
	}

}//FIN DE LA FUNCIÓN