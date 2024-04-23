const merge = [...new Set(a.concat(b))];
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));