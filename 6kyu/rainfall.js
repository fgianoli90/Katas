function mean(town, strng) {
    //Slice to the part of the string that has the town
    strng = strng.slice(strng.indexOf(town))
    let arrayOfNums=[]
    //Loop 12 times for each month
    for (let i=0;i<12;i++){
      let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      let numbers=[0,1,2,3,4,5,6,7,8,9]//array of numbers to user in includes method vs 10 OR statements
      let MM=months[i]
      let num='' //variable is string, num will hold the string of numbers found for each month 
      let iter=0 //set variable for while loop
      let pos=MM.length+1 //index to start from once month is located in string
      while (iter<1){
        //Checks if character at specified position is equal to a number or decimal point
        if(strng.charAt(strng.indexOf(MM)+pos)==='.' || numbers.includes(Number(strng.charAt(strng.indexOf(MM)+pos)))){
            //if so add to num string
            num+=strng.charAt(strng.indexOf(MM)+pos)
            pos=pos+1 //sets next index position to look at
        }else{
            //if not a number or decimal point iter=1 will stop while loop
            iter=1
            break;
        }
      }
      //push num into array of numbers and go to next iteration in for loop
      arrayOfNums.push(Number(num))
    }
//calculate and return value aka mean
  return arrayOfNums.reduce((accum,val)=>{return accum+val},0)/arrayOfNums.length
}
function variance(town, strng) {
    //Repeat the same from above to collect measurements for each month
    strng = strng.slice(strng.indexOf(town))
    let arrayOfNums=[]
    for (let i=0;i<12;i++){
      let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      let numbers=[0,1,2,3,4,5,6,7,8,9]
      let MM=months[i]
      let num=''
      let iter=0
      let pos=MM.length+1
      while (iter<1){
        if(strng.charAt(strng.indexOf(MM)+pos)==='.' || numbers.includes(Number(strng.charAt(strng.indexOf(MM)+pos)))){
            num+=strng.charAt(strng.indexOf(MM)+pos)
            pos=pos+1
        }else{
            iter=1
        break;
        }
      }
      arrayOfNums.push(Number(num))
    }
//call function mean to calculate mean passing params town and strng
  let meanOf= mean(town,strng)
  console.log(meanOf)
//for every number in array of numbers for variance function, to calculate variance minus the mean and square the result 
  let ans= arrayOfNums.map((value,i)=>{return (value-meanOf)**2})
//last step to calculate variance, sum the values from previous step and divide by the count of values
  return ans.reduce((accum,val)=>{return accum+val},0)/arrayOfNums.length
}