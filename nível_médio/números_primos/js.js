const resposta = document.getElementById("res")
let primos = []

for(let num = 2; num <= 20; num++){
    let primo = true

    for(let p = 2; p< num; p++){
        if(num % p === 0){
            primo = false
            break
        }

    }
    if(primo){
      primos.push(num)
    }
    }
    resposta.innerHTML += primos.join(", ")