const numeros = document.getElementById("numeros")
for (let n = 1; n <= 10; n += 1) {
      numeros.innerHTML += n + ".  "
  }
const pares = document.getElementById("dois")
for (let n = 2; n <= 20; n += 2) {
      pares.innerHTML += n + ".  "
  }

const regre = document.getElementById("regre")
for (let n = 10; n >= 1; n -= 1) {
      regre.innerHTML += n + ".  "
  }
 const umacinco = document.getElementById("umacinco")
  let soma = 0
  for (let n = 1; n <= 5; n++) {
      soma += n
       umacinco.innerHTML = `A soma dos números de 1 a 5 é: ${soma}`
  }
 const tres = document.getElementById("tres")

  for (let n = 3; n <= 15; n+= 3) {

      tres.innerHTML += n + ". "
  }