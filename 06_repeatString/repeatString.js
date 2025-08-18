const repeatString = function(stringValue,numOfRepeats) {
    let returnValue ="";
    if(numOfRepeats<=0)
        return Error;
    for(let i =1;i<=numOfRepeats;i++)
        returnValue+=stringValue;     
    return returnValue
};

// Do not edit below this line
module.exports = repeatString;
