function funcao(){
    const um = parseInt(document.getElementById("um").value)
    const dois = parseInt(document.getElementById("dois").value)
    const tres = parseInt(document.getElementById("tres").value)
    const quatro = parseInt(document.getElementById("quatro").value)
    const cinco = parseInt(document.getElementById("cinco").value)
    const numeros = [um, dois, tres, quatro, cinco]
    let maior = numeros[0];
    

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
  }}

   const res= document.getElementById("resposta")
   res.innerHTML +=  "O maior número é: " + maior
}

