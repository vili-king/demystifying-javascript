const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const timeFromDate = date => date.toTimeString().slice(0, 8);
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);