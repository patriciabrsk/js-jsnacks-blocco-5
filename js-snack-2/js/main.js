/**
 *
 *
   Crea un array composto da 12 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

   Infine stampa separatamente i 3 array.

 *
 */

const cars = [
   {
      marca: 'ford',
      modello: 'fiesta',
      alimentazione: 'benzina'
   },
   {
      marca: 'toyota',
      modello: 'aygo',
      alimentazione: 'elettrico'
   },
   {
      marca: 'suzuki',
      modello: 'vitara',
      alimentazione: 'metano'
   },
   {
      marca: 'fiat',
      modello: 'punto',
      alimentazione: 'elettrico'
   },
   {
      marca: 'tesla',
      modello: 'y',
      alimentazione: 'diesel'
   },
   {
      marca: 'bmw',
      modello: 'x1',
      alimentazione: 'benzina'
   },
   {
      marca: 'ferrari',
      modello: 'roma',
      alimentazione: 'metano'
   },
   {
      marca: 'daewoo',
      modello: 'matiz',
      alimentazione: 'diesel'
   },
   {
      marca: 'audi',
      modello: 'tt',
      alimentazione: 'gpl'
   },
   {
      marca: 'citroën',
      modello: 'c3',
      alimentazione: 'elettrico'
   },
   {
      marca: 'honda',
      modello: 'civic',
      alimentazione: 'elettrico'
   },
   {
      marca: 'mercedes',
      modello: 'benz',
      alimentazione: 'benzina'
   }
];

const benzina = cars.filter((car) => {
   if (car.alimentazione == 'benzina') return true
});

const diesel = cars.filter((car) => {
   if (car.alimentazione == 'diesel') return true
});

const others = cars.filter((car) => {
   if (car.alimentazione !== 'benzina' && car.alimentazione !== 'diesel') return true
});

console.log(benzina);
console.log(diesel);
console.log(others);


