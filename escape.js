const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const currentDate = () => new Date().toLocaleDateString('en-US');
const uniqueArr = (arr) => [...new Set(arr)];