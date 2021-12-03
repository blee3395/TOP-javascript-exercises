const reverseString = function(str) {

let strArray = str.split("");

strArray.reverse();

let rev = strArray.join("");

return rev;

};

// Do not edit below this line
module.exports = reverseString;
