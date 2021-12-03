const removeFromArray = function() {

let array = arguments[0];
let i = 1;

while (i < arguments.length)
{
    let value = arguments[i];
    let index = array.indexOf(value);
    if (index != -1)
    { 
        array.splice(index,1);  
    }
    
    i++;
}

return array;

};

// Do not edit below this line
module.exports = removeFromArray;
