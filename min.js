const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;