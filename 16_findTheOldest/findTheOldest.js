const findTheOldest = function(arr) {
   let arrayYears= arr.map(person => [person.yearOfBirth,person.yearOfDeath ??= new Date().getFullYear()]);// returns an array of the years creating current year as death year if undefined with ??=
    const arrAge=arrayYears.map(personAge => personAge[1]-personAge[0]);// gets numerical value of years to compare
    return arr[arrAge.indexOf(Math.max(...arrAge))];//uses the postion of the max value within the array that gets spread to find the index of the original object to return
};



// Do not edit below this line
module.exports = findTheOldest;
