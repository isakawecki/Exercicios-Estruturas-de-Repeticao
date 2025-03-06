let pri = 0
let seg = 1
let sequencia = [pri, seg]

while (pri + seg <= 13) {
    let seq = pri + seg
    pri = seg
    seg = seq
    sequencia.push(seq)
}


const res = document.getElementById("sequencia")
res.innerHTML = sequencia.join(', ')
