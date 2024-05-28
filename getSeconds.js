const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);