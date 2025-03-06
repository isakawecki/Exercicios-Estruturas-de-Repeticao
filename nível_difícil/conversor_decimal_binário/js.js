function converter() {
    let decimal = parseInt(document.getElementById("decimal").value)
    let binario = ""
    
    if (decimal === 0) {
        binario = "0"
    } else {
        while (decimal > 0) {
            binario = (decimal % 2) + binario
            decimal = Math.floor(decimal / 2)
        }
    }

    document.getElementById("resultado").textContent = "Binário: " + binario
}