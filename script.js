const convertFahrenheit = () => {
   var celsius = parseFloat(document.querySelector('#celsius').value);

   var fahrenheitResult = (1.8 * celsius) + 32;
   var a = fahrenheitResult.toFixed(2);

   document.querySelector('#celsius').value = celsius;
   document.getElementById('fahrenhiet').value = a; 
}

const convertCelsius = () => {
    var fahrenhiet = parseFloat(document.getElementById('fahrenhiet').value);
 
    var celsiusResult = (fahrenhiet - 32)/1.8;
    var b = celsiusResult.toFixed(2);
 
    document.getElementById('fahrenhiet').value = fahrenhiet;
    document.querySelector('#celsius').value = b; 
 }

 const reset = () => {
    document.getElementById('fahrenhiet').value= "";
    document.getElementById('celsius').value = ""
 } 