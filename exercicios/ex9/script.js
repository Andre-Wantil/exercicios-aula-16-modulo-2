const listaTarefas = [
    {
        "titulo": "Se fazer deixar de existir",
        "id": 1,
        "completo": true
    }
];

let input = document.getElementById('input');
let botao = document.getElementById('botao');

function criarTarefa() {
    fazer: for (let i = 0; i <= listaTarefas.length; i++) {
        if (i == listaTarefas.length) {
            listaTarefas[i] = {titulo: `${input.value}`,"id": `${i + 1}`,"completo": false}
            console.log(listaTarefas)
            input.value = ''
            break fazer
        }
    }
}

botao.addEventListener('click', () => {
    criarTarefa()
})