// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var arrNRandom = [];

alert("avrai 30 secondi per memorizzare e re-inserire i numeri che vedrai sei pronto?");

for(var i=0; i<5; i++){
    var numeroRandom =parseInt(Math.floor(Math.random() * 50));
    arrNRandom.push(numeroRandom);
}

alert(arrNRandom);

setTimeout(function(){

},1000);

var arrNUtente = [];

for (var i=0; i<5; i++){
    var numeroUtente = parseInt(prompt("inserisci i numeri"));
    arrNUtente.push(numeroUtente);
}

console.log(arrNUtente);
console.log(arrNRandom);

