// Tp 10
// Adriana Maria Davalos Insaurralde
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let minimo = 1;
	let maximo = 10;
	let nota;

	nota = Math.round(Math.random() * (maximo - minimo) + minimo);
	
	if (nota >=9) {
		alert("Excelente");
	}
	else if (nota >= 4) {
			alert("Aprobo");	
		}
		else{
			alert("Vamos,la proxima se puede");
		}

}//FIN DE LA FUNCIÓN