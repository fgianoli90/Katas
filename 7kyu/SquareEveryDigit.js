function squareDigits(num){
    //Convert num passed as number to string, split the string to array of single digits, then map array and use math power
    const numsqrd = num.toString().split('').map(integer=> Math.pow(Number(integer),2))
    //join the new mapped array to string and convert to number to return
    return Number(numsqrd.join(''))
     
   }