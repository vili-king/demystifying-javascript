const symbolsPath = path.join(buildOutputPath, 'symbols');
const removeDuplicates = (arr) => [...new Set(arr)];
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');