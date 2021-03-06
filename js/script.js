// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) - min;
}

function rangeNumCheck(num) {
    return num > 0 && num <= 100 ? true : false;
}

function inserimentoNumero() {
    let numero = 0;
    do {
        numero = Number(prompt("Inserisci numero:"));
        if (numeriIndovinati.includes(numero)) {
            alert("hai già inserito quel numero, riprova");
        } else if (isNaN(numero)) {
            alert("Puoi inserire solo valori numerici, riprova");
        } else if (!rangeNumCheck(numero)) {
            alert("puoi inserire solo valori compresi tra 1 e 100");
        }
    } while (numeriIndovinati.includes(numero) || isNaN(numero) || !rangeNumCheck(numero));

    return numero;
}

const indovinaNumeri = () => {
    if (seconds === 0) {
        clearInterval(timer);
        for (let j = 0; j < numeriGenerati; j++) {

            let numero = inserimentoNumero();

            if (numeriCasuali.includes(numero)) {
                numeriIndovinati.push(numero);
                // numeriCasuali.splice(j - numeriIndovinatiCount, 1);
                numeriIndovinatiCount++;
            }
        }
        console.log(`Hai indovinato ${numeriIndovinatiCount} numeri: ${numeriIndovinati}`);
    }
    console.log("Timer:", seconds);
    seconds--;
}

const min = 1;
const max = 100;
const numeriGenerati = 5;
let numeriCasuali = [];
const numeriIndovinati = [];
let numeriIndovinatiCount = 0;
let seconds = 5;

while (numeriCasuali.length < numeriGenerati) {
    let numero = randomNumber(min, max);
    if (!numeriCasuali.includes(numero)) {
        numeriCasuali.push(numero);
    }
}

console.log("Numeri Generati = ", numeriCasuali);
alert(`Numeri da ricordare: ${numeriCasuali}`);

const timer = setInterval(indovinaNumeri, 1000);
