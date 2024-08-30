let input = document.getElementById('input');
let text = document.getElementById('texto');
let botao = document.getElementById('botao');

function checarIdade(idade) {
    if (idade >= 18 && idade <= 64) {
        text.innerHTML = `Você tem ${idade} anos! Você pode dirigir, tem que votar e não pode se aposentar ainda (ㆆ_ㆆ)`
    } else if (idade >= 65 && idade <= 70) {
        text.innerHTML = `Você tem ${idade} anos! Você pode dirigir, tem que votar e já pode se aposentar \(￣︶￣*\))`
    } else if (idade > 70) {
        text.innerHTML = `Você tem ${idade} anos! Você pode dirigir, não precisa votar e já pode se aposentar ☜(ﾟヮﾟ☜)`
    } else if (idade < 18 && idade >= 16) {
        text.innerHTML = `Você tem ${idade} anos! Você não pode dirigir, não precisa votar e nem precisa pensar em se aposentar (∪.∪ )...zzz`
    } else if (idade < 16 && idade >= 9) {
        text.innerHTML = `Você tem ${idade} anos! Você não pode dirigir, não pode votar e nem precisa pensar em se aposentar §(*￣▽￣*)§`
    } else if (idade < 9) {
        text.innerHTML = `Você tem ${idade} anos! O que você tá fazendo na internet??? Acho que já sabe que não pode dirigir, não pode votar e nem precisa pensar em se aposentar ＼（〇_ｏ）／`
    }
}

botao.addEventListener('click', () => {
    checarIdade(input.value)
})