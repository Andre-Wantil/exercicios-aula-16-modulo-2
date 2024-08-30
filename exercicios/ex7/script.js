let text = document.getElementById('texto');
let botao = document.getElementById('botao');

let nomes = ['Pablo', 'Clara', 'Vera', 'Aderbal'];
let prefixo = ['Sr.', 'Sra.'];

for (let i = 0; i <= nomes.length; i++) {
    let nome = nomes[i];
    let ultimaLetra = nome.charAt(nome.length - 1);
    if (ultimaLetra == 'o' || ultimaLetra == 'l') {
        console.log(`${prefixo[0]} ${nome}`)
    } else if (ultimaLetra == 'a') {
        console.log(`${prefixo[1]} ${nome}`)
    }
}