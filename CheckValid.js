const isWeekday = (date) => date.getDay() % 6 !== 0;
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);