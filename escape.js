const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const fullName = name || 'buddy';