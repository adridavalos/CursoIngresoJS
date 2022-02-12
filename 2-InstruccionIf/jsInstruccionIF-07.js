//TP7 if
// Adriana Maria Davalos Insaurralde

function mostrar()
{
	
	/*let edadIngresada;
	let estadoCivilIngresado;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivilIngresado = document.getElementById("estadoCivil").value;

	if (edadIngresada <= 17  && estadoCivilIngresado != "Soltero" ){

		alert("Es muy pequeño para no ser soltero");
		
	}*/

	
	let edadIngresada;
	let mensaje;


	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	
	if (edadIngresada <= 12) {

		mensaje = "Feliz Dia";

	}else{

		if (edadIngresada <= 17) {
			
			mensaje = "Usted es adolescente";
			if (edadIngresada == 17) {

				mensaje = mensaje + " ultimo año";
				
			}

		}else{

			mensaje = "tenes edad de laburar";

			if (edadIngresada == 33) {

				mensaje = mensaje + " como cristo";
				
			}
			else {

				if (edadIngresada > 60) {

					mensaje = "a jubilarse";

					if (edadIngresada == 88) {
						
						mensaje = mensaje + " lindo numero";
					}
					
				}
			}
		}	

		

	}
	if (edadIngresada % 2 == 0 ) {

		mensaje = mensaje + " ,es par";
		
	}
		
		alert(mensaje);	

	
}//FIN DE LA FUNCIÓN