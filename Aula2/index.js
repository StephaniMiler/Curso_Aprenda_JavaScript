//Operadores Aritméticos
console.log('Operadores Aritiméticos')
let num1 = 3
let num2 = 2

console.log(num1+num2)
console.log(num1-num2)
console.log(num1/num2)
console.log(num1*num2)
console.log(num1%num2) //resto da divisão
console.log(num1**num2) //potenciação

//Operadores de incremento ++ e decremento --
console.log('Operadores de incremento ++ e decremento --')

let total = num1 + num2

console.log(total)
console.log(++total)
console.log(--total)
console.log(total++)
console.log(total)
console.log(total--)
console.log(total)

//Operadores de atribuição
console.log('Operadores de atribuição')

console.log(num1)
num1 += 20
console.log(num1)
num1 -= 10
console.log(num1)
num1 *= 2
console.log(num1)
num1 /= 2
console.log(num1)

//Operadores de comparação
console.log('Operadores de comparação')

let num = 3
let nome = 'Stephani'

console.log(num > 0)
console.log(num < 0)
console.log(num >= 0)
console.log(num <= 0)
console.log(num ===3)
console.log(nome !== 'Stephani')

//Operadores de igualdade
console.log('Operadores de igualdade')
//=== Strict: verifica o valor e o tipo
//==  Lose: verifica apenas o valor

num3 = 3
num4 = '3'

console.log(num3 === num4)
console.log(num3 == num4)

//Operadores ternários
console.log('Operadores ternários')

let motorista = 90
let velocidade = motorista > 100 ? 'Acima da velocidade' : 'Dentro do limite de velocidade'

console.log(velocidade)

//Operadores lógicos
console.log('Operadores lógicos')
let temIdade  = true
let temTitulo = true
let podeVotar = temIdade && temTitulo

console.log('Pode votar: ' + podeVotar)

let podeViajar = !podeVotar
console.log('Pode viajar: ' + podeViajar)

//If e Else
console.log('If e Else')
let velCarro = 90

if (velCarro > 110) {
    console.log('Dirigindo muito rápido')
}
else if (velCarro > 40 && velCarro <= 110){
    console.log('Velocidade Ok')
}
else {
    console.log('Dirigindo muito devagar')
}

//Switch e case
console.log('Switch e case')
let aeroporto = 'abc'

switch(aeroporto){
    case 'MCO':
        console.log('Orlando')
        break
    case 'JFK':
        console.log('John F. Kennedy')
        break
    case 'SEA':
        console.log('Seattle')
        break
    default:
        console.log('Desconhecido')
        break            
} 

//Loop for
console.log('Loop for')
for(i=1 ; i<=10; i++)
    console.log('Numero ', i)

//Loop While
console.log('Loop while')
 j= 1
 while(j<=10){
    console.log('Numero ', j)
    j++
} 
 
//Loop do while
console.log('Loop do while')
k=1
do{
    console.log('Numero ', k)
    k++
} while(k<=10)

//For in Loop
console.log('For in Loop')
const meuCarro ={

    modelo : 'BMW',
    ano    : 2023,
    km     : 0
}

for(let x in meuCarro)
    console.log(x, meuCarro[x])

//For of Loop (usado para arrays)
console.log('For of loop')

const amigos = ['Marcos', 'Ana', 'Jose']

for(let y of amigos)
    console.log(y)