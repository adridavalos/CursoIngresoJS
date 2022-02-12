//TP 9 
//Adriana Maria Davalos Insaurralde 
function mostrar()
{
	const COSTO = 15000;
	const AUMENTOVEITE = 1.2;
	const AUMENTODIEZ = 1.1;
	const DESCUENTODIEZ = 0.9;
	const DESCUENTOVEINTE = 0.8;
	let estacionDelAnoIngresado;
	let ciudadIngresada;
	

	estacionDelAnoIngresado = document.getElementById("txtIdEstacion").value;
	ciudadIngresada = document.getElementById("txtIdDestino").value;

	if (estacionDelAnoIngresado == "Invierno" ) {

		switch (ciudadIngresada) {

			case "Bariloche":

				alert("El costo del viaje es " + COSTO * AUMENTOVEITE);

				break;

			case "Cataratas":
			case "Cordoba":

				alert("El costo del viaje  es " + COSTO * DESCUENTODIEZ);

				break;

			case "Mar del plata":

				alert("El costo del viaje es " + COSTO * DESCUENTOVEINTE);
				
				break;
		
		
		}
	}else if (estacionDelAnoIngresado == "Verano") {

		switch (ciudadIngresada) {

			case "Bariloche":

				alert("El costo del viaje es " + COSTO * DESCUENTOVEINTE);

				break;

			case "Cataratas":
			case "Cordoba":

				alert("El costo del viaje  es " + COSTO * AUMENTODIEZ);

				break;

			case "Mar del plata":

				alert("El costo del viaje es " + COSTO * AUMENTOVEITE);
				
				break;
		
		
		}
	}else if (estacionDelAnoIngresado == "Otoño" || estacionDelAnoIngresado == "Primavera") {
		
		switch (ciudadIngresada) {

			case "Bariloche":

			case "Cataratas":

			case "Mar del plata":

				alert("El costo del viaje es " + COSTO * AUMENTODIEZ);
				
				break;

			case "Cordoba":
				
				alert("El costo del viaje es " + COSTO);

				break;
		}
	}

}