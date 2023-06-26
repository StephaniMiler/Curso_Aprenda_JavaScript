//Adicionando valores a uma array
console.log('Adicionando valores a uma array')

const num = [7,8,9]

num.push(10,11,12) //insere no final
num.unshift(1,2,3)//insere no início
num.splice(3,0,4,5,6)//insere no meio

console.log(num)

//Localizando itens em uma array primitiva
console.log('Localizando itens em uma array primitiva')
const numeros2 = [7,8,9]

console.log(numeros2.indexOf(4)) //-1 pois não existe 4 no array
console.log(numeros2.indexOf(8)) //1, posição do 8
console.log(numeros2.includes(5)) //False, pois não tem 5 no array
console.log(numeros2.includes(8)) //True, há um 8

//Localizando intens em uma array de referência
console.log('Localizando intens em uma array de referência')

const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the future'},
    {id: 3, movieName: 'The matrix'}
]

console.log(movies.find(movie => movie.movieName == 'The matrix'))

//Removendo itens de um array
console.log('Removendo itens de um array')
const sequencia = [5,6,7,8]

console.log(sequencia.pop()) //remove o último item
console.log(sequencia.shift()) //remove o primeiro
console.log(sequencia.splice(2, 1)) //remove o index 2 (7)

//Esvaziando um array
console.log('Esvaziando um array')

let numeros3 = [5,6,7,8]
let numeros4 = [5,6,7,8]
let numeros5 = [5,6,7,8]

numeros3 = [] //primeira forma
numeros4.length = 0 //segunda forma
numeros5.splice(0, numeros5.length)

console.log(numeros3)
console.log(numeros4)
console.log(numeros5)

//Concatenando um array
console.log('Concatenando um array')
let numbers = [5,6,7,8]
let letters = ['a', 'b', 'c']

all = numbers.concat(letters) //junta os dois
part = all.slice(3,5) // pega o index 3 e 4

console.log(all)
console.log(part)

//Utilizando o Join Array
console.log('Utilizando o Join Array')

let clients = ['Andre', 'Jose', 'Marcela']
let clientsJoin = clients.join(', ')
console.log(clientsJoin)

//Revertendo um array
console.log('Revertendo um array')
clients.sort()
console.log(clients)
clients.reverse()
console.log(clients)

//Verificando elementos em um array
console.log('Verificando elementos em um array')

const tempLondon = [18,13,8,2]

const tempPositive = tempLondon.every(function(value){
    return value >=0
})

console.log(tempPositive)
//verifica se todas as temperaturas em London são positivas

//Filtrando um array com o filter
console.log('Filtrando um array com filter')

const tempMaior = tempLondon.filter(value => value >= 10)

console.log(tempMaior) //vai retornar valores acima de 10ºc


