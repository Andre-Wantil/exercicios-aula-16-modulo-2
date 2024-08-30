const livrosIniciais = [
    {
      "titulo": "César",
      "autor": "Alan Massie",
      "ano": 2017
    },
    {
      "titulo": "Jojo",
      "autor": "Araki",
      "ano": 1997
    }
];

for (let chave in livrosIniciais) {
    let { titulo, autor, ano} = livrosIniciais[chave]
    console.log(`
    Título: ${titulo}
    Autor: ${autor}
    Ano: ${ano}
    `)
}