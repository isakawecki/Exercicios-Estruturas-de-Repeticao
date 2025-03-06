let n = Math.floor(Math.random() * 100) + 1
let t = 0
let p = 0

function jogar() {
    p = parseInt(document.getElementById("palpite").value)
    if (p < 1 || p > 100 || isNaN(p)) {
        document.getElementById("mensagem").textContent = "Por favor, insira um número válido entre 1 e 100."
        return
    }

    t++
    document.getElementById("tentativas").textContent = "Tentativas: " + t

    if (p < n) {
        document.getElementById("mensagem").textContent = "O número é maior. Tente novamente!"
    } else if (p > n) {
        document.getElementById("mensagem").textContent = "O número é menor. Tente novamente!"
    } else {
        document.getElementById("mensagem").textContent = `Parabéns! Você acertou o número ${n} em ${t} tentativas.`
    }
}