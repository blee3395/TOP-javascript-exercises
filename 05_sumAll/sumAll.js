const sumAll = function(a, b) 
{
    if (!Number.isInteger(a) || !Number.isInteger(b)
        || a < 0 || b < 0)
    {
        return "ERROR";
    }

    if (a > b)
    {
        let c = a;

        a = b;
        b = c;
    }
    
    let sum = a;
    let i = a;

    while (i < b)
    {
        i++;
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
