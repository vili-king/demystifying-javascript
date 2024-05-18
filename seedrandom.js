const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';