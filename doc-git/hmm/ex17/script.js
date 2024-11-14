let produto = parseInt(prompt("Valor do produto:"))
let desconto = parseInt(prompt("valor do desconto:"))

let valordesconto = produto * desconto / 100

let precofinal = produto - valordesconto

document.write(precofinal)