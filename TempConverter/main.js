function TemperatureConverter() {
    let temperature = parseFloat(document.getElementById('temp').value);
    let unit = document.getElementById('type').value;
    let result = document.getElementById('result');
    if (isNaN(temperature)) {
        result.innerHTML = 'Please enter a valid number';
        return;
    }
    if (unit=='Select any one') 
        result.innerHTML = 'Please select a unit';
    else if (unit=='celsius')
        result.innerHTML = 'Fahrenheit: '+((temperature * 9/5) + 32).toFixed(2)+'°F<br>Kelvin: '+(temperature + 273.15).toFixed(2)+'K';
    else if (unit=='fahrenheit')
        result.innerHTML = 'Celsius: '+((temperature - 32) * 5/9).toFixed(2)+'°C<br>Kelvin: '+((temperature - 32) * 5/9 + 273.15).toFixed(2)+'K';
    else if (unit=='kelvin')
        result.innerHTML = 'Celsius: '+(temperature - 273.15).toFixed(2)+'°C<br>Fahrenheit: '+((temperature - 273.15) * 9/5 + 32).toFixed(2)+'°F';
}