function convertToUSD() {
    const cadInput = document.getElementById('cadInput').value;
    const usdRate = 0.8; // Hardcoded exchange rate (1 CAD = 0.8 USD)
    
    if (validateInput(cadInput)) {
        const usdValue = cadInput * usdRate;
        document.getElementById('result').innerHTML = `Converted Amount: $${usdValue.toFixed(3)} USD`;
    }
}

function convertToCAD() {
    const usdInput = document.getElementById('usdInput').value;
    const cadRate = 1.25; // Hardcoded exchange rate (1 USD = 1.25 CAD)
    
    if (validateInput(usdInput)) {
        const cadValue = usdInput * cadRate;
        document.getElementById('result').innerHTML = `Converted Amount: $${cadValue.toFixed(3)} CAD`;
    }
}

function validateInput(input) {
    if (input === "" || isNaN(input) || input <= 0) {
        alert("Please enter a valid amount.");
        return false;
    }
    return true;
}
