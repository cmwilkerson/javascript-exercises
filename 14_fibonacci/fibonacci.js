const fibonacci = function(num) {
    if (num <0)
        return "OOPS";
     if (num == 0)
        return 0;
    if (num == 1|| num ==2)
        return 1;
    let [previous,next]= [1,1];
    for(i=2;i<=num;i++){
        [previous,next]=[next,previous+next]
        console.log(`i=${i} Previous:${previous} Next:${next}`)
       
    }
return previous;
};

// Do not edit below this line
module.exports = fibonacci;
