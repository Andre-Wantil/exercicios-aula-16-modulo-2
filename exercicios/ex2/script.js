let input = document.getElementById('input');
let text = document.getElementById('texto');
let botao = document.getElementById('botao');

function checarImparPar(numero) {
    if ((numero % 2) == 0) {
        text.innerHTML = `O número ${numero} é par!`
    } else {
        text.innerHTML = `O número ${numero} é ímpar!`
    }
}

botao.addEventListener('click', () => {
    checarImparPar(input.value)
})