function tabuada(){
    const tabu = document.getElementById("tabu")
    const numero = parseInt(document.getElementById("numero").value)
   tabu.innerHTML = ""
    for (let n = 0; n <= 10; n++) {
        const nu2 = numero * n
        tabu.innerHTML +=  `${numero} x ${n} = ${nu2} <br>`;}
}