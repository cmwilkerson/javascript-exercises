const removeFromArray = function(arr,...remove) {
    for(const test of remove){
        while(arr.includes(test)){           
            arr.splice(arr.indexOf(test),1);
        }
    }
    return arr;
};
// Do not edit below this line
module.exports = removeFromArray;
