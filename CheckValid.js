const getRandomBoolean = () => Math.random() >= 0.5;
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));