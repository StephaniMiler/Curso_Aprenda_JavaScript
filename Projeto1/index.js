
//Função que será executada ao clicar no botão "calculate"
function outcome() {

    //coleta os valores das váriaveis da página html
    let num1 = Number(document.getElementById('num-one').value)
    let num2 = Number(document.getElementById('num-two').value)
    let total = 0

    //Se selecionar o botão de +
    if (document.getElementById('box1').checked)
        total = num1 + num2
    //Se selecionar o botão de -
    else if (document.getElementById('box2').checked)
        total = num1 - num2
    //Se selecionar o botão de x    
    else if (document.getElementById('box3').checked)
        total = num1 * num2
    //Se selecionar o botão de ÷    
    else
        total = num1 / num2
    document.getElementById('resultArea').innerHTML = 'Result: ' + String(total) //Insere o resultado na página html na result area
}