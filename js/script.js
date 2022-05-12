// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.




function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

const min = 1;
const max = 100;
const numeriGenerati = 5;
let numeriCasuali = [];
const numeriIndovinati = [];
let numeriIndovinatiCount = 0;
let seconds = 1;

for (let i = 0; i < numeriGenerati; i++) {
    numeriCasuali.push(randomNumber(min, max));
}

console.log("Numeri Generati = ", numeriCasuali);
alert(`Numeri da ricordare: ${numeriCasuali}`);

const timer = setInterval(() => {
    if (seconds === 0) {
        clearInterval(timer);
        for (let j = 0; j < numeriGenerati; j++) {
            let numero = Number(prompt("Inserisci numero:"));
            if (numeriCasuali.includes(numero) && !numeriIndovinati.includes(numero)) {
                numeriIndovinati.push(numero);
                // numeriCasuali.splice(j - numeriIndovinatiCount, 1);
                numeriIndovinatiCount++;
            }
        }
        //console.log("Numeri casuali = ", numeriCasuali);
        console.log(`Hai indovinato ${numeriIndovinatiCount} numeri: ${numeriIndovinati}`);
    }
    
    seconds--;
}, 1000);