let botao = document.getElementById('botao')
let text = document.getElementById('texto')

function mudarTexto(texto) {
    texto.innerHTML = 'Oia, o texto mudou'
}

botao.addEventListener('click', () => {
    mudarTexto(text)
})