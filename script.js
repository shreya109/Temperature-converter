// Temperature conversion functions
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

// Conversion logic
function convertTemperature() {
  var input = parseFloat(document.getElementById("input").value);
  var unit = document.getElementById("unit").value;
  var output = document.getElementById("output");

  if (isNaN(input)) {
      output.textContent = "Please enter a valid temperature.";
      return;
  }

  switch (unit) {
      case "celsius":
          output.textContent = input + " °C = " + celsiusToFahrenheit(input).toFixed(2) + " °F / " +
              celsiusToKelvin(input).toFixed(2) + " K";
          break;
      case "fahrenheit":
          output.textContent = input + " °F = " + fahrenheitToCelsius(input).toFixed(2) + " °C / " +
              celsiusToKelvin(fahrenheitToCelsius(input)).toFixed(2) + " K";
          break;
      case "kelvin":
          output.textContent = input + " K = " + kelvinToCelsius(input).toFixed(2) + " °C / " +
              celsiusToFahrenheit(kelvinToCelsius(input)).toFixed(2) + " °F";
          break;
  }
}

// Event listener for conversion button
document.getElementById("convertBtn").addEventListener("click", convertTemperature);
