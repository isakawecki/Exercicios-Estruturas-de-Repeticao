let numeros = []

for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt("Insira o número " + (i + 1) + ":"))
    numeros.push(numero)
}

for (let i = 0; i < numeros.length - 1; i++) {
    for (let j = 0; j < numeros.length - 1 - i; j++) {
        if (numeros[j] > numeros[j + 1]) {
            let temp = numeros[j]
            numeros[j] = numeros[j + 1]
            numeros[j + 1] = temp
        }
    }
}

let resultado = "Números em ordem crescente: <br>" + numeros.join("<br>")
document.getElementById("resultado").innerHTML = resultado