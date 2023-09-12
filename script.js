function convertTemperature() {
    
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const unit = document.getElementById("unit").value;

    
    let result;
    if (unit === "celsius") {
        result = (inputTemperature * 9/5) + 32; // Celsius to Fahrenheit
    } else {
        result = (inputTemperature - 32) * 5/9; // Fahrenheit to Celsius
    }

    
    document.getElementById("resultTemperature").textContent = `Result: ${result.toFixed(2)} ${unit === "celsius" ? "Fahrenheit" : "Celsius"}`;
}

