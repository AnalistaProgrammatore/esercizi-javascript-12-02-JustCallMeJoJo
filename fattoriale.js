/**
* Scrivere qui il codice della funzione fattoriale(n)
**/

let x = function(n) {
  var y=0
  if (n<=1){
    return 1
  }
  return y=x(n-1)*n
}
console.log(x(n))
