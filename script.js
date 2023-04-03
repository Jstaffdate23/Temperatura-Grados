// crear funciones de temperatura.

console.log('conversion')

function convertirCelsiusAFahrenheit(celsius) {
    let resultado = celsius * 9 / 5.0 + 32;
    return resultado;

}
function convertirFahrenheitACelsius(fahrenheit) {
    let resultado = (fahrenheit - 32) * 5 / 9.0;
    return resultado;
}

let celsius =32;
let resultado = convertirCelsiusAFahrenheit(celsius);
console.log(`${celsius}°C = ${resultado}°F`);


console.log();

let fahrenheit = resultado;
resultado = convertirFahrenheitACelsius(fahrenheit);
console.log(`${fahrenheit}°F = ${resultado}°C`);








