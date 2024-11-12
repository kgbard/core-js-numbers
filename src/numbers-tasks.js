function getRectangleArea(width, height) {
  return width * height;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getAverage(value1, value2) {
  const maxSafeValue = Number.MAX_VALUE;

  const sum = value1 + value2;

  if (Math.abs(sum) === Infinity) {
    return maxSafeValue;
  }

  return sum / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function getLinearEquationRoot(a, b) {
  return -b / a;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const magnitudeV1 = Math.sqrt(x1 * x1 + y1 * y1);
  const magnitudeV2 = Math.sqrt(x2 * x2 + y2 * y2);
  const cosineTheta = dotProduct / (magnitudeV1 * magnitudeV2);
  return Math.acos(cosineTheta);
}

function getLastDigit(value) {
  return Math.abs(value) % 10;
}

function parseNumberFromString(value) {
  return Number(value);
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a * a + b * b + c * c);
}

function roundToPowerOfTen(num, pow) {
  const factor = 10 ** pow;
  return Math.round(num / factor) * factor;
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

function toNumber(value, def) {
  const num = Number(value);
  if (Number.isNaN(num)) {
    return def;
  }
  return num;
}

function getCube(num) {
  return num ** 3;
}

function getFibonacciNumber(index) {
  return index <= 1
    ? index
    : getFibonacciNumber(index - 1) + getFibonacciNumber(index - 2);
}

function getSumToN(n) {
  return (n * (n + 1)) / 2;
}

/**
 * Returns the sum of the digits of a given number.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   123 => 6  // (1+2+3)
 *   202 => 4  // (2+0+2)
 *   5   => 5  // 5
 */
function getSumOfDigits(num) {
  return String(num)
    .split('')
    .map(Number)
    .reduce((sum, digit) => sum + digit, 0);
}

/**
 * Returns true if the given number is a power of two, false otherwise.
 *
 * @param {number} num
 * @return {boolean}
 *
 * @example:
 *   4   => true
 *   16  => true
 *   15  => false
 */
function isPowerOfTwo(num) {
  if (num <= 0) return false;
  const log = Math.log2(num);
  return log === Math.floor(log);
}

function getSine(num) {
  return Math.sin(num);
}

function numberToStringInBase(number, base) {
  return number.toString(base);
}

function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}

function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

function getNumberValue(number) {
  return number.valueOf();
}

function isNumber(number) {
  return Number.isFinite(number);
}

function isInteger(number) {
  return Number.isInteger(number);
}

function getFloatOnString(str) {
  return Number.parseFloat(str);
}

function getIntegerOnString(str, base) {
  const parsedNum = Number.parseInt(str, base);
  if (!Number.isNaN(parsedNum)) {
    return parsedNum;
  }
  return NaN;
}

function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}

function roundToSmallestInteger(number) {
  return Math.floor(number);
}

function roundToLargestInteger(number) {
  return Math.ceil(number);
}

function roundToNearestInteger(number) {
  return Math.round(number);
}

function getIntegerPartNumber(number) {
  return Math.trunc(number);
}

function getSumOfNumbers(x1, x2, x3) {
  const sum = x1 + x2 + x3;
  return parseFloat(sum.toFixed(15));
}

function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}

/**
 * Returns count of odd numbers from zero to the resulting number.
 * The resulting number is taken into account.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 4  => 2
 * 5  => 3
 * 10 => 5
 * 15 => 8
 */
function getCountOfOddNumbers(number) {
  if (number < 0) {
    return 0;
  }
  return Math.floor((number + 1) / 2);
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
