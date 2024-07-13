const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const getRandomBoolean = () => Math.random() >= 0.5;
const apmRootPath = path.join(repositoryRootPath, 'apm');