// TP 5 
//Adriana Maria Davalos Insaurralde

function mostrar()
{
	let edadIngresado;

	edadIngresado = parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresado < 13  ||  edadIngresado >= 18 ) {

		alert("La persona no es adolescente");
		
	}

}//FIN DE LA FUNCIÓN