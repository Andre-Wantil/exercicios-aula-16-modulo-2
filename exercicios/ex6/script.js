let text = document.getElementById('texto');
let botao = document.getElementById('botao');

let array = [0, 1, 2, 3, 4];

function dividirArray() {
    let somarTudo = array.reduce((accum, curr) => accum + curr);
    let dividirTudo = somarTudo/array.length;
    text.innerHTML += `${somarTudo} é a soma da array. A média é: ${dividirTudo}`
}

botao.addEventListener('click', () => {
    dividirArray()
})