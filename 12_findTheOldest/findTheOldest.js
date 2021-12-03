const findTheOldest = function(array) {

    let oldest = null;
    
    for (let i = 0; i < array.length; i++)
    {
        if (oldest == null)
        {
            oldest = array[i];
        }

        if (array[i].yearOfDeath == null)
        {
            array[i].yearOfDeath = 2021;
        }
        
        if ((array[i].yearOfDeath - array[i].yearOfBirth) > 
                (oldest.yearOfDeath - oldest.yearOfBirth))
        {
            oldest = array[i];
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
