const convertToCelsius = function(temp) {
  return parseFloat(((temp-32)/1.8).toFixed(1));
};

const convertToFahrenheit = function(temp) {
  return parseFloat(((1.8*temp)+32).toFixed(1));
};
console.log(convertToFahrenheit(-10))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
