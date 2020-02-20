function solution(str, ending){
    let x = ending.length
    if(str.split("").splice(-x).join("")===ending){
    return true
    }else {
    return false
    }
  }