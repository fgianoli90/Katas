function divisors(integer) {
    let x= Math.floor(integer/2) +1
    let divisors=[]
      for (let i=2;i<x;i++){
        if (integer%i===0){
          divisors.push(i)
        }
      }
      if (divisors.length===0){
        return `${integer} is prime`
      }
      return divisors
    };