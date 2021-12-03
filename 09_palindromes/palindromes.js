const palindromes = function (str) {

    let rev = [];
    for (let i = str.length; i >= 0; --i)
    {
        if (str.charAt(i).match(/[A-Z]/ig))
        {
            rev.push(str.charAt(i));
        }
    }

    let newStr = [];
    for (let i = 0; i < str.length; i++)
    {
        if (str.charAt(i).match(/[A-Z]/ig))
        {
            newStr.push(str.charAt(i));
        }
    }
    

    if (rev.join() === newStr.join())
    {
        return true;
    }
    else 
    {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
