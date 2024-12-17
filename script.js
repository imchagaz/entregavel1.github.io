function calcularTroco() {
    const valorCompra = parseFloat(document.getElementById("valorCompra").value);
    const valorPago = parseFloat(document.getElementById("valorPago").value);
    const resultadoDiv = document.getElementById("resultado");
  
    if (isNaN(valorCompra) || isNaN(valorPago)) {
      resultadoDiv.innerHTML = "<p style='color:red;'>Por favor, insira valores válidos.</p>";
      return;
    }
  
    if (valorPago < valorCompra) {
      resultadoDiv.innerHTML = "<p style='color:red;'>O valor recebido é insuficiente.</p>";
      return;
    }
  
    let troco = (valorPago - valorCompra).toFixed(2);
    resultadoDiv.innerHTML = `<p>Troco: R$ ${troco}</p>`;
  
    // cédulas e moedas disponíveis
    const cedulas = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
    let distribucaoTroco = "<p>Distribuição do Troco:</p><ul>";
  
    // para calcular distribuição
    cedulas.forEach((valor) => {
      let quantidade = Math.floor(troco / valor);
      if (quantidade > 0) {
        distribucaoTroco += `<li>${quantidade} x R$ ${valor.toFixed(2)}</li>`;
        troco -= quantidade * valor;
        troco = troco.toFixed(2); // para evitar erros de precisão
      }
    });
  
    distribucaoTroco += "</ul>";
    resultadoDiv.innerHTML += distribucaoTroco;
  }
  