//Parâmetros default
console.log('Parâmetros default')

function emprestimo(loan, rate = 2.5, years = 5){
    return(loan * rate / 100 * years) + loan
}

console.log(emprestimo(20000 /*2.5 , 5*/)) //não precisa passar os dois últimos argumentos, pois já estão declarados nos parâmetros