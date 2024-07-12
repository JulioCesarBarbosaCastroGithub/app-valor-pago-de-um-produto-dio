let precoProduto = 150.00;

let formaDePagamento = "k";

let quantidadeDeParcelas = 1;

let valorASerPago;

if(formaDePagamento === "Débito" && quantidadeDeParcelas === 1){
    let percentual = 0.10;
    let porcentagemDesconto = precoProduto * percentual;      
    valorASerPago = precoProduto - porcentagemDesconto;
    console.log("O valor a ser pago é: " + valorASerPago.toFixed(2) + " R$");
}else if(formaDePagamento === "Dinheiro" && quantidadeDeParcelas === 1){
    let percentual = 0.15;
    let porcentagemDesconto = precoProduto * percentual;      
    valorASerPago = precoProduto - porcentagemDesconto;
    console.log("O valor a ser pago é: " + valorASerPago.toFixed(2) + " R$");
}else if(formaDePagamento === "PIX" && quantidadeDeParcelas === 1){
    let percentual = 0.15;
    let porcentagemDesconto = precoProduto * percentual;      
    valorASerPago = precoProduto - porcentagemDesconto;
    console.log("O valor a ser pago é: " + valorASerPago.toFixed(2) + " R$");
}else if(quantidadeDeParcelas === 2){   
    valorASerPago = precoProduto;
    console.log("O valor a ser pago é: " + valorASerPago.toFixed(2) + " R$");
}else if(quantidadeDeParcelas > 2){
    let percentual = 0.10;
    let porcentagemDesconto = precoProduto * percentual;      
    valorASerPago = precoProduto + porcentagemDesconto;
    console.log("O valor a ser pago é: " + valorASerPago.toFixed(2) + " R$");
}else{
    console.log("Forma de pagamento ou número de parcelas inválido, tente novamente por favor.")
}
