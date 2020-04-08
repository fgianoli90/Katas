function hydrate(s) {
    let x=s.split(' ').filter(each=>{return Number(each)}).map(eachNum=>{return Number(eachNum)}).reduce((accum,val)=>{return accum+val},0)

    if(x==1){
        return x + " glass of water"
    }else{
       return x + " glasses of water"
    }
}