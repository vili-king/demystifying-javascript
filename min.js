var pattern = {};
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const isEmptyObject = obj => Object.keys(obj).length === 0;
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;