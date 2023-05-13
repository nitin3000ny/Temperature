const fahrenheit = document.getElementById('fahrenheit');
const celsius = document.getElementById('celsius');
const kelvin = document.getElementById('kelvin');

document.getElementById('convert').addEventListener("click", () => {
    const fvalue = parseInt(fahrenheit.value);
    if (isNaN(fvalue)) {
        alert("Enter numbers only");
    } else {
        const cvalue = ((fvalue - 32) * 5 / 9).toFixed(2);
        const kvalue = ((fvalue + 459.67) * 5 / 9).toFixed(2);
        celsius.value = cvalue;
        kelvin.value = kvalue;
    }
});

document.getElementById('convert-from-celsius').addEventListener("click", () => {
    const cvalue = parseInt(celsius.value);
    if (isNaN(cvalue)) {
        alert("Enter numbers only");
    } else {
        const fvalue = ((cvalue * 9 / 5) + 32).toFixed(2);
        const kvalue = (cvalue + 273.15).toFixed(2);
        fahrenheit.value = fvalue;
        kelvin.value = kvalue;
    }
});

document.getElementById('convert-from-kelvin').addEventListener("click", () => {
    const kvalue = parseInt(kelvin.value);
    if (isNaN(kvalue)) {
        alert("Enter numbers only");
    } else {
        const fvalue = ((kvalue * 9 / 5) - 459.67).toFixed(2);
        const cvalue = (kvalue - 273.15).toFixed(2);
        fahrenheit.value = fvalue;
        celsius.value = cvalue;
    }
});



