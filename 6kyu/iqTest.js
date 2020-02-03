function iqTest(numbers){
    //convert string to array and filter the numbers out to another array
    let arrNums=numbers.split(' ').filter(num=> num>0)
    //declare variables
    let countOdd=0;
    let countEven=0;
    let even = 0;
    let odd = 0;
    //Loop through numbers in array to count evens vs odds
    for (i=0;i<arrNums.length;i++){
        if (Number(arrNums[i])%2==0){
        countEven++
        even=Number(arrNums[i])
        }
        if(!(Number(arrNums[i])%2)==0){
        countOdd++
        odd=Number(arrNums[i])
        }
    }
    //Return index plus 1 of number that differs from the rest therefore is unique and has a lower counter
    if (countOdd > countEven){
        return arrNums.indexOf(even.toString())+1
       }
    if (countEven > countOdd){
       return arrNums.indexOf(odd.toString())+1
    }
  }