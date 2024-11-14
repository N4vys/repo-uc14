let produto = parseInt(prompt("Valor do produto:"))
let imposto = parseInt(prompt("Valor do imposto:"))

let valorImposto = (imposto / 100) * produto

let precofinal = produto + valorImposto

document.write(`Valor imposto: R$ ${valorImposto.toFixed(2)}<br>`);
document.write(`Preço final: R$ ${precofinal.toFixed(2)}<br>`);

