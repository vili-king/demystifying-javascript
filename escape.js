console.log(1 +  "2" + "2");
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));