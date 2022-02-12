//TP 4 switch
// Adriana Maria Davalos Insaurralde

function mostrar()
{
	let mesIngresado;

	mesIngresado = document.getElementById("txtIdMes").value;

	switch (mesIngresado) {
		case "Febrero":

			alert("Tiene 28 dias");
			
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			
			alert("Tiene 30 dias");

			break;
	
		default:

			alert("Tiene 31 dias");

			break;
	}
	
}//FIN DE LA FUNCIÓN