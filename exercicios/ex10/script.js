const listaDeAlunos = `[
    {
        "nome": "Claudio",
        "notas": [9, 7, 3]
    },
    {
        "nome": "Paulo",
        "notas": [4, 2, 8]
    },
    {
        "nome": "José",
        "notas": [1, 6, 3]
    },
    {
        "nome": "Aderbal",
        "notas": [10, 11, 10.5]
    }
]`;

// Transformando em array/objeto
let listaDeAlunosJSON = JSON.parse(listaDeAlunos);

// Função que calcula a média '-'
function cacularMedia(media, notas) {
    return (media / notas.length).toFixed(2)
}

function mostrarMedia() {
    //Checa os objetos da array e repete de acordo com a quantidade mudando de objeto toda vez que repete
    for (let chave in listaDeAlunosJSON) {
        // Desconstoí o objeto em duas variaveis temporárias
        let { nome, notas } = listaDeAlunosJSON[chave]
        
        // Criando a variavel media(média)
        let media = 0
    
        // Pega a variavel notas e vai somando os numeros à variavel media
        for (let x = 0; x < notas.length; x++) {
            media += notas[x]
        }
    
        let resultado = cacularMedia(media, notas)
    
        if (resultado >= 7) {
            console.log(`O aluno ${nome} passou com uma média de ${resultado}`)
        } else if (resultado < 7) {
            console.log(`O aluno ${nome} reprovou com uma média de ${resultado}`)
        }
    }
}

mostrarMedia();