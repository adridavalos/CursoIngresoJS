// TP 9
// Adriana Maria Davalos Insaurralde
function mostrar()
{   
    let numero;
    let minimo = 1;
    let maximo = 10;

    numero= Math.round(Math.random() * (maximo - minimo) + minimo);

    alert(numero);

}//FIN DE LA FUNCIÓN

// Math.random(); me tira numero al alzar pero del cero y casi 1
//Math.floor(); entero inferior
//Math.round();redondea