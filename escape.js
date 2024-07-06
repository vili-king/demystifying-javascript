console.log(typeof typeof 1);
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;