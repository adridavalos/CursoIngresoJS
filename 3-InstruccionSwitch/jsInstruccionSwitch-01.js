// TP 1 switch
//Adriana Maria Davalos Insaurralde
function mostrar()
{
	let mesDelAño;
	
	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño) {
		case "Enero":

			alert("Que comiences bien el año!!!");
			
			break;
		case "Marzo":

			alert("A clases!!!");

			break;
		case "Julio":

			alert("Se vienen las vacaciones!!!");

			break;
		case "Diciembre":

			alert("Felices fiestas!!!");

			break;
	}

}//FIN DE LA FUNCIÓN