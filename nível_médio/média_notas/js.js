let total = 0
for (let i = 0; i < 3; i++) {
    let nota = parseFloat(prompt("Insira a nota " + (i + 1) + ":"))
    total += nota;
}
let media = total / 3;
const mediaca = document.getElementById("media")
mediaca.innerHTML  = "A média é: " + media