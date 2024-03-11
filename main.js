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

// // Variabile con funzione

// let arr = [2,4,5,10,3];

// function somma(arr) {

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i] 
//     }
//     return sum

// }

// console.log(somma(arr));



// // Esercizio 2
// let annoCorrente = 2024;
// let annoNascita = 1991;

// let annoPersona = annoCorrente - annoNascita;
// let anniMancanti = 100 - annoPersona;

// console.log(`Hai ${annoPersona} anni e ti mancano ${anniMancanti} anni per compierne 100`);


// // Variabile con funzione 

// function eta(ac,an) {
//     let ap = ac - an
//     return ap
// }

// let anniPersona = eta(2024,1991)
// let cento = 100;

// function anniMancanti() {
//     let anniManc = cento - anniPersona
//     return anniManc
// }

// let anniacento = anniMancanti()

// console.log(`Hai ${anniPersona} e ti mancano ${anniacento} per arrivare a 100 anni`);



// // Esercizio 3
// let numeroGatti = 44;
// let gattiPerFila = 6;

// let fileRisultanti = Math.round (numeroGatti / gattiPerFila);
// let resto = numeroGatti % gattiPerFila;
// let gattiMancanti = gattiPerFila - resto;

// console.log(`Ci sono ${fileRisultanti} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${resto}`);


// // Variabile con funzione

// function gatti(numGatti, gattiperFila) {
//     let file = Math.round (numGatti/gattiperFila)
//     let resto = numGatti % gattiperFila
//     let gattiMancanti = gattiperFila - resto

//     let datGatti = [file,resto,gattiMancanti]
//     return datGatti
// }

// let datGatti = gatti(44,6)

// console.log(`Ci sono ${datGatti[0]} file di gatti e ne mancano ${datGatti[1]} per una nuova fila, con un avanzo di ${datGatti[2]}`);



// //Esercizio Extra

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


// // Variabile con funzione

// let temp = [10, -2, 31, 22, 15, -6, 7];

// function maggiore(temp) {
//     let numMaggiore = Math.max(...temp)
//     return numMaggiore
// }

// let tempAlta = maggiore(temp)

// function minore(temp) {
//     let numMinore = Math.min(...temp)
//     return numMinore 
// }

// let tempMin = minore(temp)

// console.log(`La temperatura più alta è ${tempAlta} e quella più fredda è di ${tempMin}`);




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


// Giorno 3 ------------------------------------------------


// Esercizio 1


// function generaNumeriCasuali(n) {
//     let numeriCasuali = [];
  
//     for (var i = 0; i < n; i++) {
//       let numeroCasuale = Math.floor(Math.random() * (10 - 1) + 1);
//       numeriCasuali.push(numeroCasuale);
//     }
  
//     return numeriCasuali;
//   }
  
//   let risultato = generaNumeriCasuali(5);
//   console.log(risultato);


// Esercizio 2

// let arrNumeri = [3,7,-2,5,8,1,2,5,6,-4]


// Ordine decrescente
// arrNumeri.sort(function(a, b) {
//     return b - a;
//     }
//   )

// console.log(arrNumeri)

// Ordine crescente
// arrNumeri.sort(function(a, b) {
//     return a - b;
//     }
//   )

// console.log(arrNumeri)


// Esercizio 3

// function contaCifre(numero) {
    
//     if (Number.isInteger(numero) && numero >= 0 && numero <= 9999) {
      
//       let numeroStringa = numero.toString();
      
//       return numeroStringa.length;
//     } else {
      
//       return "Il numero deve essere un intero positivo non superiore a 9999.";
//     }
//   }

// console.log(contaCifre(9));
// console.log(contaCifre(99));


// Esercizio 4

// function uguale(n,m) {
//     return (n === m)
// }

// let risultato = uguale(2,2)

// console.log(risultato);


// Esercizio 5

// function tabellina(num) {

//     let arr = []

//     for (let i = 1; i <= 10; i++) {
//         let moltiplicazione = num * i
//         arr.push(moltiplicazione)
//     }
//     return arr
// }

// let risultato = tabellina(2);

// console.log(risultato);


// Esercizio 6

// Spread Syntax (...)
// let arr = [10,12,78,-4,-20,11];

// function maggiore(arr) {
//     let numMaggiore = Math.max(...arr)
//     return numMaggiore
// }

// console.log(maggiore(arr));

// function minore(arr) {
//     let numMinore = Math.min(...arr)
//     return numMinore 
// }

// console.log(minore(arr));