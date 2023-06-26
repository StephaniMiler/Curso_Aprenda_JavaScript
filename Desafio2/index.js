let valor = Number(prompt('Insira o valor do produto: ')) //Coleta e armazena o valor

//Se o produto for mais caro que 20 dólares é reprovado, se não é aprovado
if (valor <= 20) {
    document.getElementById('resultado').innerHTML = 'Aprovado!'
}
else {
    document.getElementById('resultado').innerHTML = 'Reprovado!'
}