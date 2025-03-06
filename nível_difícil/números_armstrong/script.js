let resultado = ''
for (let num = 100; num < 1000; num++) {
    let unidade = num % 10
    let dezena = Math.floor((num % 100) / 10)
    let centena = Math.floor(num / 100)
    let soma = Math.pow(centena, 3) + Math.pow(dezena, 3) + Math.pow(unidade, 3)
    
    if (soma === num) {
        resultado += num + '<br>'
    }
}

document.getElementById("resultado").innerHTML = resultado