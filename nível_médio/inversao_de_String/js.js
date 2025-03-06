function palavra(){
    const palavra = document.getElementById("palav").value
    const resposta = document.getElementById("resposta")
    let invertida = ""

    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i]}

        resposta.innerHTML = invertida
}