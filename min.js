const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const randomBoolean = () => Math.random() >= 0.5;
const isWeekday = (date) => date.getDay() % 6 !== 0;