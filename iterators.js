/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function(array) {
  // Your code here
  if (!array) return [];
  if (array.length === 0) return [];
  // for (let i = 0; i<array.length; i++) console.log(array);
  array.forEach(temp => console.log(temp))
};

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function(temperatures) {
  // Your code here
  return temperatures.map(toCelsius => (toCelsius - 32) * (5/9))
};

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function(temperatures, threshhold) {
  // Your code here
  return temperatures.filter(hottestDays => hottestDays > threshhold);
};

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function(temperatures, threshhold) {
  // Your code here
  const hotCelcius = toCelsius(hottestDays(temperatures, threshhold));
  logger(hotCelcius);
};

export { logger, toCelsius, hottestDays, logHottestDays };
