const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	let ans = 0;
  let i = 0;
  while (i < array.length)
  {
    ans += array[i];
    i++;
  }
  return ans;
};

const multiply = function(array) {
  let ans = 1;
  let i = 0;
  while (i < array.length)
  {
    ans *= array[i];
    i++;
  }
  return ans;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let ans = 1;
  let i = 1;
  while (i <= a)
  {
    ans *= i;
    i++;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
