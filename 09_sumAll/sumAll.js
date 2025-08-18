const sumAll = function(boundOne,boundTwo) {
    if(
    typeof(boundOne)=='string'|| typeof(boundTwo)=='string'||
    !Number.isInteger(boundOne)||!Number.isInteger(boundTwo)
    ||boundOne<0 || boundTwo<0
     ) return "ERROR";
    if(boundOne===boundTwo)
        return boundOne;
    let upperBound =0;
    let lowerBound =0;
    if(boundOne>boundTwo){
        upperBound=boundOne;
        lowerBound=boundTwo;
    }else{
        upperBound=boundTwo;
        lowerBound=boundOne;
    }
    let arr=[...Array(upperBound+-lowerBound+1).keys()].map(num => lowerBound+num);
    console.log(arr);
return ( arr.reduce((acc,current) =>{
    return acc+current;
},0));
};

// Do not edit below this line
module.exports = sumAll;
