let conta = parseInt(prompt("Valor da conta:"))
let gorjeta = parseInt(prompt("Valor da gorjeta:"))

let valor1 = conta / gorjeta 

let pagamento = conta + valor1

document.write(`Valor gorjeta: R$ ${pagamento.toFixed(2)}<br>`);
document.write(`Preço final: R$ ${valor1.toFixed(2)}<br>`);



