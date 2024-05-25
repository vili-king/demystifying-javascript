const currentDate = () => new Date().toLocaleDateString('en-US');
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];