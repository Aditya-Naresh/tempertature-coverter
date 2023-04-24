function convertC() {
    let celsius = parseFloat(document.getElementById("C").value);

    let fahrenheit = (celsius * 9 / 5) + 32;

    if (isNaN(fahrenheit)) {
        document.getElementById("Fahrenheit").textContent = "Enter a valid number";
    } else {
        document.getElementById("Fahrenheit").textContent = "The Temperature is " + fahrenheit.toFixed(2) + " degree Fahrenheit";
    }

}

function convertF() {
    let fahrenheit = parseFloat(document.getElementById("F").value);

    let celsius = (fahrenheit - 32) * 5 / 9;

    if (isNaN(celsius)) {
        document.getElementById("Celsius").textContent = "Enter a valid number";
    } else {
        document.getElementById("Celsius").textContent = "The Temperature is " + celsius.toFixed(2) + " degree Celsius";
    }
}

function toggleC() {
    let button1 = document.getElementById('toC');
    let button2 = document.getElementById('toF');
    let FToC = document.querySelector('.FToC');
    let CToF = document.querySelector('.CToF');

    FToC.classList.remove('hidden');
    button2.classList.remove('hidden');
    CToF.classList.add('hidden');
    button1.classList.add('hidden');
}

function toggleF() {
    let button1 = document.getElementById('toC');
    let button2 = document.getElementById('toF');
    let FToC = document.querySelector('.FToC');
    let CToF = document.querySelector('.CToF');

    FToC.classList.add('hidden');
    button2.classList.add('hidden');
    CToF.classList.remove('hidden');
    button1.classList.remove('hidden');
}