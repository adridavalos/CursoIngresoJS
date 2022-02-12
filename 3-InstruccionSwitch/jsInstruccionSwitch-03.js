//TP 3 
// Adriana Maria Davalos Insaurralde

function mostrar()
{
	let mesIngresado;
	
	mesIngresado = document.getElementById("txtIdMes").value;

	switch (mesIngresado) {

		case "Febrero":

			alert("Este mes no tiene mas de 29 dias");
			
			break;
	
		default:

			alert("Este mes tiene 30 o mas dias");

			break;
	}
}//FIN DE LA FUNCIÓN