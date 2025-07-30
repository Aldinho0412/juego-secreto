//Variables
let numeroMaximo = prompt('Indicame un número que usaré para definir un aleatorio entre 0 y el número que me compartas');
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntenos = 3;

 console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
       numeroUsuario = parseInt(prompt(`¿Me indicas un número entre 1 y ${numeroMaximo} por favor`));

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        // Acertamos la condición
        alert(`¡Acertaste! El número es: ${numeroUsuario}. Lo lograste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        // Incrementamos el contador cuando la persona no acierta
        //intentos = intentos + 1;
        // intentos += 1;
        intentos++;
        //palabraVeces = 'veces';
    if (intentos > maximosIntenos) {
        alert('Llegaste al número máximo de intentos')
        break;
        }
    }
}
