var numero_max = parseInt(prompt('Quanti numeri vuoi stampare?', 100))
var primo_numero  = parseInt(prompt('Qual è il primo numero del quale vuoi sostituire i multipli con una parola?', 3))
var prima_parola  = prompt('Quale parola vuoi sostituire ai multipli del numero che hai appena scelto?', 'Fizz')
var secondo_numero  = parseInt(prompt('Qual è il secondo numero del quale vuoi sostituire i multipli con una parola?', 5))
var seconda_parola  = prompt('Quale parola vuoi sostituire ai multipli del numero che hai appena scelto?', 'Buzz')

//Crea un ciclo che stampa i numeri da 0 a al numero scelto dall'utente
for (var i = 0; i <= numero_max; i++) {
    //Se il numero è un multiplo sia di primo_numero che di secondo_numero è sostituito da prima_parola + seconda_parola
    if ((i != 0) && (i % primo_numero == 0) && (i % secondo_numero == 0)) {
        console.log(prima_parola + seconda_parola);
    }
    //Se il numero è un multiplo di primo_numero è sostituito da prima_parola
    else if ((i % primo_numero == 0) && (i != 0)) {
        console.log(prima_parola);
    }
    //Se il numero è un multiplo di secondo_numero è sostituito da seconda_parola
    else if ((i % secondo_numero == 0) && (i != 0)) {
        console.log(seconda_parola);
    }
    //Stampa il numero se non è multiplo di primo_numero o secondo_numero
    else {
        console.log(i);
    }
}
