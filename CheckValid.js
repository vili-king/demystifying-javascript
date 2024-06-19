const fullName = name || 'buddy';
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;