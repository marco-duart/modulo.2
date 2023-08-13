/* 13 - Dado o array de objetos com propriedades titulo e genero:*/

const filtrarFilmes = (filmes) => {
    let novosFilmes = []
    novosFilmes = filmes.filter(filme => {
        if(filme.genero === "Ficção Científica") {
            return filme
        }
    })
    return novosFilmes
}

const filmes = [
    { titulo: "Matrix", genero: "Ficção Científica" },
    { titulo: "Senhor dos Anéis", genero: "Fantasia" },
    { titulo: "Interestelar", genero: "Ficção Científica" }
]
const novosFilmes = filtrarFilmes(filmes)
console.log(novosFilmes)