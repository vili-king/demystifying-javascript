var regexp  = new RegExp('{{([^}]+)}}', 'g');
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;