console.log(false == '0');
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const average = arr => arr.reduce((a, b) => a + b) / arr.length;