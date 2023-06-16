console.log('Hello, world!');

//Testando variáveis
let nomeUsuario      = 'Stephani';
let sobrenomeUsuario = 'Miler';
let sexoUsuario      = 'F';
let dataNasc         = '19/05/2000';

console.log('Nome:'              , nomeUsuario);
console.log('Sobrenome:'         , sobrenomeUsuario);
console.log('Sexo:'              , sexoUsuario);
console.log('Data de nascimento:', dataNasc);

//Variáveis do tipo primitivo
//String
let nomeItem = 'Caneta'
//Numero
let precoItem = 3
//Booleano
let itemDisponivel = true
//Undefiened (pode escrever undefiened na frente também)
let corItem = 'red'
//Null
//nomeItem = null

//console.log(nomeItem)
console.log(precoItem)
console.log(itemDisponivel)
console.log(corItem)
//console.log(nomeItem)

//Variáveis do tipo referência
//Objeto:
let pen = {
    nomeItem : 'pen',
    precoItem : 3,
    itemDisponivel : true,
    corItem : 'red'
}

//Alterar algum item do objeto:
pen.corItem = 'blue'

console.log(pen)

//Array:
let friends = ['Marcos' , 'Silvia' , 'Elisa'] //Declara o array
console.log(friends)//Imprime a lista
friends[2] = 'Junior' //Elisa passa a ser Junior
console.log(friends[1]) //Imprime apenas Silvia

//Funções
//Ex1
function saleStatus(status, total){
    console.log('Transaction ' + status + ' Total $: ' + total)
}
saleStatus('Approved' , 30) //Chama a função com os argumentos

//Ex 2: função que efetua um cálculo matemático para dar 10% de desconto
function percentage10(price){
    return price - (price * 10 /100)
}
console.log(percentage10(30))



