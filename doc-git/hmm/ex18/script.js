let precoProduto = parseFloat(prompt("Digite o preço do produto:"));

let desconto = precoProduto * 0.1; 
let valorComDesconto = precoProduto - desconto;

let valorParcela = precoProduto / 3;

document.write(`Preço: R$ ${precoProduto.toFixed(2)}<br>`);
document.write(`À Vista: R$ ${valorComDesconto.toFixed(2)}<br>`);
document.write(`Ou 3x de: R$ ${valorParcela.toFixed(2)}<br>`);

