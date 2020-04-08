function hydrate(s) {
    let x=s.split(' ').filter(each=>{return Number(each)})
    if (x.length <2){
      x=x.join('')
        if(x==1){
            return x + " glass of water"
        }else{
            return x + " glasses of water"
        }
    }else if( x.length >1){
        return x.map(eachNum=>{return Number(eachNum)}).reduce((accum,val)=>{return accum+val},0)+" glasses of water"
    }
   }