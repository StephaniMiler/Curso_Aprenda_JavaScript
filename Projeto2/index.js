//Função para formatar os valores em dinheiro para duas casas decimais
function formatMoney(value) {

    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$ ' + value 

} 

//Função para verificar o plural de pessoas
function formatSplit(value) {

    if (value == 1) return value + ' Person'
    return value + ' People'

}

//Função para os cálculos
function update() {
   
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById(  'splitInput' ).value

    let tipValue = bill * (tipPercent / 100) //Calcula o valor da gorjeta
    let billTotal = bill + tipValue       //Calcula o total com a gorjeta
    let billEach = billTotal / split         //Calcula o valor por pessoa

    //Retornando informacoes ao HTML
    document.getElementById('tipPercent').innerHTML      =       tipPercent + ' %'
    document.getElementById( 'tipValue' ).innerHTML      =   formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML    =  formatMoney(billTotal)
    document.getElementById(  'splitValue'  ).innerHTML  =      formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)
}