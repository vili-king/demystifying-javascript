console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const reversedString = str => str.split('').reverse().join('');
const average = arr => arr.reduce((a, b) => a + b) / arr.length;