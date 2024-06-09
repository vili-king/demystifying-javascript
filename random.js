const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();