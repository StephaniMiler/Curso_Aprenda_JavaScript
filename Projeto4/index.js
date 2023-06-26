
let computerNumber
let userNumbers = []
let attempts     = 0
let maxGuesses  = 10

//Função para habilitar o botão 'New game'
function newGame(){

    window.location.reload()
    
}

//Função para inicializar o jogo
function init() {

    //Computador gera um número aleatório de 1 a 100
   computerNumber = Math.floor(Math.random() * 100 + 1) 
   console.log(computerNumber)

}

//Função para armazenar os numeros do usuário em um array e comparar com o número do computador
function compareNumbers(){

    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    //Adicionando o máximo de tentativas
    if (attempts < maxGuesses){
        //Verifica se o palpite do usuário está abaixo ou acima do valor do computador
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too high!'
            //Esvazia o campo após pressionar enter
            document.getElementById('inputBox').value = ''
            //Atualiza o número de tentativas
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }
        else if (userNumber < computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your number is too low!'
            //Esvazia o campo após pressionar enter
            document.getElementById('inputBox').value = ''
            //Atualiza o número de tentativas
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }
        else {
            document.getElementById('textOutput').innerHTML = "Congratulations, that's right!"    
            //Atualiza o número de tentativas
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            //Desabilita o campo para digitar um número após o jogo ser finalizado
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }

    }
    else {
        document.getElementById('textOutput').innerHTML = 'You lose!! ' + 'The computer number was: ' + computerNumber
        //Desabilita o campo para digitar um número após o jogo ser finalizado
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }   

}