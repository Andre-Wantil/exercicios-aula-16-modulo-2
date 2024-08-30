let text = document.getElementById('texto');
let botao = document.getElementById('botao');

function mostrarDivisiveis() {
    for (let i = 0; i <= 100; i++) {
        if ((i % 3) == 0 || (i % 5) == 0) {
            text.innerHTML += `\n${i}`
        }
    }
}

botao.addEventListener('click', () => {
    mostrarDivisiveis()
})