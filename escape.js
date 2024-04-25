var c = new Counter(); c.add(); c.add(); c.add();
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;