//Criando um objeto
console.log('Criando um objeto')

const book = {
    bookTitle: 'Atomic Habits',
    bookAuthor : 'James Clear',
    bookPages : 306,
    bookChapters : {
        chap1: 'Fundamentals',
        chap2: '1st law'
    },
    //Funções dentro do objeto
    printBook: function(){
        console.log('Printing...')
    }
}
book.printBook()
console.log(book)

//Criando uma factory
console.log('Criando uma factory')
function createBook(title, author, pages){ //factory que cria um objeto
    const book = { //objeto
        bookTitle  : title,
        bookAuthor : author,
        bookPages  : pages,
    }
    return book
}
const book1 = createBook('A menina que roubava livros', 'Markus Zusak' , 253)
const book2 = createBook('Le Petit Prince', 'Antoine E.', 113)
book1.color = 'White' //adiciona uma propriedade apenas ao livro 1

console.log(book1)
console.log(book2)

//Criando um construtor (tem a mesma função da factory porém é mais fácil)
console.log('Criando um construtor')

function CreateLivro(titulo, autor, paginas){
    this.tituloLivro  = titulo;
    this.autorLivro   = autor;
    this.paginasLivro = paginas
}
const livro1 = new CreateLivro('Vidas Secas', 'Graciliano Ramos', 145)
console.log(livro1)

//Objetos globais
console.log('Exemplos de uso de objetos globais')

console.log(Math.max(5,2,3,13,18,4,10)) //função global que retorna maior valor

let mensagem = 'Olá, meu nome é Stephani'
console.log(mensagem.length) //função que retorna o tamanho da variável mensagem
console.log(mensagem.includes('nome')) //função que verifica se existe 'nome' na variável mensagem

//Utilizando Template Literals
console.log('Utilizando Template Literals')
let PrimeiroNome = 'Joao'

const email = `Olá, ${PrimeiroNome},
a reunião está confirmada.
Andre. `

console.log(email)



