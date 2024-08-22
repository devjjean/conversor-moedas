document.getElementById('convert-btn').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (isNaN(amount) || amount <= 0) {
        alert('Digite um valor válido.');
        return;
    }

    // Taxas de câmbio fictícias para o exemplo
    const exchangeRates = {
        'USD': { 'EUR': 0.92, 'BRL': 5.00, 'USD': 1 },
        'EUR': { 'USD': 1.09, 'BRL': 5.43, 'EUR': 1 },
        'BRL': { 'USD': 0.20, 'EUR': 0.18, 'BRL': 1 }
    };

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    document.getElementById('result').innerText = convertedAmount;
});

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 5000);
}

setInterval(createStar, 100);