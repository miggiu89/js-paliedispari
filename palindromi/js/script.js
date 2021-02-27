//chiedere all'utente di inserire una parola
// creare una funzione per vedere se è palindroma

//richiesta all'utente

var parola = prompt('inserisci una parola, ti dirò se è palindroma!!');
console.log(parola);

//creo la funzione 

function palindrome(str) {
     var len = str.length; 
     for ( var i = 0; i < Math.floor(len/2); i++ ) {
          if (str[i] !== str[len - 1 - i]) 
          { return false; 
        } 
        }
    return true; 
} 

//inserisco la condizione

if(palindrome(parola)){
    console.log('La parola è palindroma.');
} else {
    console.log('La parola non è palindroma.');
}