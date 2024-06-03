const resultingPromises = urls.map((url) => makHttpRequest(url));
const merge = (a, b) => [...a, ...b];
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));