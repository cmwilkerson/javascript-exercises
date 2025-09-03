const palindromes = function (palinString) {
    allowedChars="abcdefghijklmnopqrstuvwxyz0987654321"
    let stringToConsider=palinString.toLowerCase().split("").filter((charInput)=> allowedChars.includes(charInput)).join("")
    reversedString=stringToConsider.split("").reverse().join("");
    return stringToConsider===reversedString;
};
console.log(palindromes("hEll$$o!!"));

// Do not edit below this line
module.exports = palindromes;
