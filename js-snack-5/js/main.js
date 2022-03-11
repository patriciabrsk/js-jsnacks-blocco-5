/**
 *
 *
   Crea un array di oggetti che rappresentino delle persone.
   Ogni persona ha un nome, un cognome e un'età.
   
   Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome 
   e l'indicazione se può guidare, in base all'età.
 */

const people = [
   {
      name: 'John',
      lastName: 'Smith',
      age: 34
   },
   {
      name: 'Marta',
      lastName: 'Hima',
      age: 18
   },
   {
      name: 'Alejandra',
      lastName: 'Lopez',
      age: 28
   },
   {
      name: 'Tom',
      lastName: 'Ford',
      age: 15
   },
];

const peopleDriving = people.map(person => ({ 
   [person.name + ' ' + person.lastName]: person.age,
   'driving-status': person.name + ' ' + person.lastName + canDrive(person)
}));

console.log(peopleDriving);

function canDrive(person) {
   if (person.age > 18) {
      return ' can drive.'
   } 
   return ' cannot drive.'
}
