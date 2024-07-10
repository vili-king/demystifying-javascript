const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const executableName = getExecutableName(channel, appName);