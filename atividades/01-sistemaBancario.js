/*****************************************************
            Exercícios para fixação
*****************************************************/
/*
1. Crie uma variável e atribua o nome de uma pessoa;
2. Crie uma variável e atribua o nome de um banco;
3. Crie uma variável e atribua o número da agência;
4. Crie uma variável e atribua o número da conta;
5. Crie uma variável e atribua o saldo da conta;
6. Imprima(mostre) os dados e o saldo da conta;
7. Efetue e imprima 5 movimentações na conta;
8. Imprima novamente os dados e o saldo da conta;
9. Crie uma variável para calcular o total depositado e outra para o total sacado, e exiba esses valores;
*/

let cliente = "Rafael Altieris";
let banco = "Itaú";
let agencia = 3423;
let conta = 337;
let saldo = 3000;

let salario = 1300;

let deposito01 = 1500;
let gasto01 = 100;
let gasto02 = 800;
let gasto03 = 300;
let gasto04 = 150;

console.log("Cliente: ", cliente, "\nBanco: ", banco, "\nAgência: ", agencia, "\nConta: ", conta, "\nSaldo", saldo);

let movimentacao01 = saldo - gasto01;
console.log("\nTransferência efetuada no valor de 100 reais. \nSaldo após transferências:", movimentacao01);

let movimentacao02 = movimentacao01 + deposito01;
console.log("\nSalário recebido.\nSaldo atual:", movimentacao02);

let movimentacao03 = movimentacao02 - gasto02;
console.log("\nContas Pagas.\nSaldo Atual:", movimentacao03);

let movimentacao04 = movimentacao03 - gasto03;
console.log("\nPagamento via débito no valor de 300 reais.\nSaldo Atual:", movimentacao04);

let movimentacao05 = movimentacao04 - gasto04;
console.log("\nPix efetuado no valor de 150 reais.\nSaldo Atual:", movimentacao05);

console.log("\nCliente: ", cliente, "\nBanco: ", banco, "\nAgência: ", agencia, "\nConta: ", conta, "\nSaldo", movimentacao05);


let totaldepositado = deposito01;
let totalgasto = gasto01 + gasto02 + gasto03 + gasto04;

console.log("\nTotal depositado no mês:", totaldepositado, "\nTotal gasto no mês", totalgasto);