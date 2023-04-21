function convertC() {
    let celsius = parseFloat(document.getElementById("C").value);
    
    let fahrenheit = (celsius * 9/5) + 32;

    document.getElementById("Fahrenheit").textContent = fahrenheit.toFixed(2);
}

function convertF(){
    let fahrenheit = parseFloat(document.getElementById("F").value);

    let celsius = (fahrenheit - 32) * 5/9;

    document.getElementById("Celsius").textContent = celsius.toFixed(2);
}

