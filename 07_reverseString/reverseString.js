const reverseString = function(stringValue) {
    return stringValue.split("").map((char,i,stringValue)=> stringValue[stringValue.length-1-i]).join('')
};

// Do not edit below this line
module.exports = reverseString;
