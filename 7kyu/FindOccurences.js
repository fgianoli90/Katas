const findAll = (array, n) => {
    let ans=[]
    //Loop through array and if element value equals n then push i (which is the position) into ans array.
    for (let i=0; i< array.length;i++){
      if(array[i]===Number(n)){
        ans.push(i)
      }
    }
    return ans
   }