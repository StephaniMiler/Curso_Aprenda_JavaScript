
const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green', 'Orange', 'Black', 'White']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

//Método para atribuir a função do botão
btn.addEventListener('click', function(){

    const randomColor = getRandomColor()
    //Retornar ao HTML o nome da cor e a mesma no background
    document.body.style.background = colors[randomColor]
    color.textContent = colors[randomColor] 
     
})

//Função para gerar um número aleatório
function getRandomColor(){

    return Math.floor(Math.random() * colors.length)

}