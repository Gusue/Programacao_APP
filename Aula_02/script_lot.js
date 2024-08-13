//3º Programa que gere x numeros aleátorio da loteria para o usuario o usuario fala a quantidade que ele quer de numeros e gera a quantidade aleatoria -> 1 a 60 não pode se repetir 

function generateNumbers() {
    const quantity = parseInt(document.getElementById('quantity').value);
    if (isNaN(quantity) || quantity < 1 || quantity > 12) {
        alert("Quantidade Invalida insira um número válido entre 1 e 12.");
        return;
    }

    const numbers = new Set();
    while (numbers.size < quantity) {
        const randomNumber = Math.floor(Math.random() * 60) + 1;
        numbers.add(randomNumber);
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Números Sorteados:</h2><p>${Array.from(numbers).sort((a, b) => a - b).join(', ')}</p>`;
}

