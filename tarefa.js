function calculateLoanPayments() {
    // Solicitar dados ao usuário
    const principal = Number(prompt("Digite o montante do empréstimo (R$):"));
    const annualInterestRate = Number(prompt("Digite a taxa de juros anual (%):")) / 100;
    const numberOfTerms = Number(prompt("Digite o número de parcelas:"));

    // Verificar se os dados são válidos
    if (isNaN(principal) || isNaN(annualInterestRate) || isNaN(numberOfTerms) || principal <= 0 || annualInterestRate < 0 || numberOfTerms <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Calcular a taxa de juros mensal
    const monthlyInterestRate = annualInterestRate / 12;

    // Inicializar variáveis
    let balance = principal;
    let totalPaid = 0;
    let result = '';

    // Calcular e exibir parcelas decrescentes
    for (let i = 1; i <= numberOfTerms; i++) {
        // Calcular o pagamento de juros para a parcela atual
        const interestPayment = balance * monthlyInterestRate;

        // Calcular o pagamento principal
        const principalPayment = principal / numberOfTerms;

        // Calcular a parcela total
        const installment = principalPayment + interestPayment;

        // Atualizar saldo
        balance -= principalPayment;

        // Adicionar o valor da parcela ao resultado
        result += `Parcela ${i}: R$ ${installment.toFixed(2)}\n`;

        // Adicionar ao total pago
        totalPaid += installment;
    }

    // Adicionar total pago ao resultado
    result += `Total Pago: R$ ${totalPaid.toFixed(2)}`;

    // Exibir os resultados
    console.log(result);
}

// Iniciar a simulação
calculateLoanPayments();
