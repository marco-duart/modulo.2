/* 2 - Crie uma função que recebe o seguinte array de objetos representando livros: 
Utilize o método filter para retornar um novo array contendo apenas os livros publicados antes de 2000.*/

const booksBefore2000 = (books) => {
    let newBooks = []
    newBooks = books.filter(book => {
        if(book.ano<2000) {
            return book
        }
    })
    return newBooks
}

const books = [
    { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
    { titulo: "1984", autor: "George Orwell", ano: 1949 },
    { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", ano: 1967 },
    { titulo: "Jogos Vorazes", autor: "Suzanne Collins", ano: 2008 },
    { titulo: "Maze Runner: correr ou morrer", autor: "James Dashner", ano: 2010 }
];
const newBooks = booksBefore2000(books)
console.log(newBooks)