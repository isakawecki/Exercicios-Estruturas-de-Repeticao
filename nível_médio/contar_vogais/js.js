function contar(){
  const palavra =  document.getElementById("palav").value
    const certa = palavra.toLowerCase()
    let nume = 0


    for (let i = 0; i < certa.length; i++) {
    if (certa[i] === "a" || certa[i] === "e" || certa[i] === "i" ||certa[i] === "o" ||certa[i] === "u" )
        nume ++
}
const resposta = document.getElementById("resposta")
resposta.innerHTML = "A palavra inserida possui " + nume + " vogais."
}