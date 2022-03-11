/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */

const basketballPlayer = {
    code: '',
    name: '',
    lastName: '',
    age: '',
    averagePts: '',
    pts3: '',
}

basketballPlayer.code = createPlayerCode();
basketballPlayer.averagePts =  Math.floor(Math.random() * 51);
basketballPlayer.pts3 = Math.floor(Math.random() * 101);
basketballPlayer.age = Math.floor(Math.random() * 35) + 1;

function createPlayerCode() {
    return createChars(3) + createNums(3);
}

console.log(createPlayerCode());
function createChars(length) {
    var result = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charsLength = chars.length;
    for ( var i = 0; i < length; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * charsLength));
    }
    return result;
}

function createNums(length) {
    var result = '';
    var numbers = '0123456789';
    var numbersLength = numbers.length;
    for ( var i = 0; i < length; i++ ) {
      result += numbers.charAt(Math.floor(Math.random() * numbersLength));
    }
    return result;
}

function createName() {}


function createLastName() {

}

console.log(basketballPlayer);