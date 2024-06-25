function calculate() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const current = parseFloat(document.getElementById('current').value);
    const resistance = parseFloat(document.getElementById('resistance').value);
    let result;

    if (!isNaN(voltage) && !isNaN(current)) {
        // Calculate resistance
        result = voltage / current;
        document.getElementById('result').textContent = `Resistance (R) = ${result.toFixed(2)} ohms`;
    } else if (!isNaN(voltage) && !isNaN(resistance)) {
        // Calculate current
        result = voltage / resistance;
        document.getElementById('result').textContent = `Current (I) = ${result.toFixed(2)} amps`;
    } else if (!isNaN(current) && !isNaN(resistance)) {
        // Calculate voltage
        result = current * resistance;
        document.getElementById('result').textContent = `Voltage (V) = ${result.toFixed(2)} volts`;
    } else {
        // If insufficient input values
        document.getElementById('result').textContent = `Please enter any two values to calculate the third.`;
    }
}
