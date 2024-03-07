// Giorno 1 ------------------------------------------------

// // Esercizio 1
// let numero1 = 2;
// let numero2 = 4;
// let numero3 = 5;
// let numero4 = 10;
// let numero5 = 3;

// let somma = numero1 + numero2 + numero3 + numero4 + numero5;
// let media = somma / 5;

// console.log(`La somma tra i numeri equivale a ${somma} e la media risulta ${media}`);



// Esercizio 2
// let annoCorrente = 2024;
// let annoNascita = 1991;

// let annoPersona = annoCorrente - annoNascita;
// let anniMancanti = 100 - annoPersona;

// console.log(`Hai ${annoPersona} anni e ti mancano ${anniMancanti} anni per compierne 100`);



// // Esercizio 3
// let numeroGatti = 44;
// let gattiPerFila = 6;

// let fileRisultanti = Math.round (numeroGatti / gattiPerFila);
// let resto = numeroGatti % gattiPerFila;
// let gattiMancanti = gattiPerFila - resto;

// console.log(`Ci sono ${fileRisultanti} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${resto}`);



// Esercizio Extra
// let a = 10;
// let b = -2;
// let c = 31;
// let d = 22;
// let e = 15;
// let f = -6;
// let g = 7;

// let temperaturaAlta = Math.max (a,b,c,d,e,f,g);
// let temperaturaMinima = Math.min (a,b,c,d,e,f,g);

// console.log(`La temperatura più calda è ${temperaturaAlta} quella più fredda ${temperaturaMinima}`);


// Giorno 2 -----------------------------------------------


// Esercizio 1

// let voto = 29;

// if (voto >= 1 && voto < 18) {
//     console.log("Bocciato");
// } else if (voto >= 18 && voto <= 21){
//     console.log("Sufficiente");
// } else if (voto >= 21 && voto <= 24){
//     console.log("Buono");
// } else if (voto >= 24 && voto <= 27){
//     console.log("Distinto");
// } else if (voto >= 27 && voto <= 29){
//     console.log("Ottimo");
// } else if (voto > 31){
//     console.log("Eccellente");
// } else {
//     console.log("Valore non valido");
// }


// Esercizio 2

// let temperatura = -12 ;

// if (temperatura < -10) {
//     console.log("Copriti...ancora ti raffreddi");
// } else if (temperatura < 0){
//     console.log("Non è tanto il freddo quanto l'umidità");
// } else if (temperatura < 20){
//     console.log("Non ci sono più le mezze stagioni");
// } else if (temperatura < 30){
//     console.log("Mi dia una peroni sudata");
// } else if (temperatura >= 30){
//     console.log("Lu mare, lu sole, lu ientu");
// } else {
//     console.log("Valore non valido");
// }


// Esercizio 3

// let bevanda;

// do {

//     bevanda = +prompt("Scegli la tua bevanda");
   
// } while (bevanda != 1 && bevanda != 2 && bevanda != 3);

// switch (bevanda) {
//     case 1:
//     console.log("È stata selezionata l'acqua");
//     break;

//     case 2:
//     console.log("È stata selezionata coca cola");
//     break;

//     case 3:
//     console.log("È stata selezionata birra");
//     break;

//     default:
//     console.log("Valore non valido");
// }  


//  Esercizio 4

// let tiri = 5;
// let punteggioGiocatore1 = 0;
// let punteggioGiocatore2 = 0;


// for(let i = 0; i < tiri; i++ ){

//     let lancioGiocatore1 = Math.round(Math.random()* (6 - 1)+ 1);
//     punteggioGiocatore1 = punteggioGiocatore1 + lancioGiocatore1;

//     console.log(`Tiro ${i+1} Giocatore 1 - Punti: ${lancioGiocatore1}`)

//     let lancioGiocatore2 = Math.round(Math.random()* (6 - 1)+ 1);
//     punteggioGiocatore2 = punteggioGiocatore2 + lancioGiocatore2;

//     console.log(`Tiro ${i+1} Giocatore 2 - Punti: ${lancioGiocatore2}`)
// }


// console.log("Totale Giocatore 1: " + punteggioGiocatore1);
// console.log("Totale Giocatore 2: " + punteggioGiocatore2);

