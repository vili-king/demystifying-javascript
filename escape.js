const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
var pattern = {};
const value = ( 5 < 7 ) ? "True" : "False" ;