const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const goToTop = () => window.scrollTo(0, 0);
var regexp  = new RegExp('{{([^}]+)}}', 'g');