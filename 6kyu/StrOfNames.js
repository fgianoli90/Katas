function list(names){
    let strNames=""
    let num=names.length
    if (num > 1){
      for (let i=0;i<num-2;i++){
        strNames= strNames+ names[i].name+ ", "
      }
      strNames = strNames+names[num-2].name+" & "+ names[num-1].name
    }else if(num===0){
      strNames = ""
    }else{
      strNames= names[0].name
    }
    return strNames
      
    }