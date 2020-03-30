function descendingOrder(n){
    let arr=[]
    //n is a number so cant be split
    //change to string to split and order
    let x= n.toString()
    for(let i=0;i<x.length;i++){
      arr.push(Number(x[i]))
    }
    //sort arr in descending order and join elements. Turn arr joined to number and return.
  return Number(arr.sort((a,b)=>b-a).join(''))
  }