let n = 5
let resultado = ""
for (let i = 0; i < n; i++) {
    let linha = ""
    for (let j = 0; j <= i; j++) {
        let coef = 1
        for (let k = 0; k < j; k++) {
            coef = coef * (i - k) / (k + 1)
        }
        linha += coef + " "
    }
    resultado += linha + "<br>"
}
document.getElementById("triangulo").innerHTML = resultado
