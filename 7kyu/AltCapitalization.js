function capitalize(s){
    let x = s.split('').map((eachLetter,i)=>{if (i%2!=0){return eachLetter.toLowerCase()}else{return eachLetter.toUpperCase()} }).join('')
    let y = s.split('').map((eachLetter,i)=>{if (i%2===0){return eachLetter.toLowerCase()}else{return eachLetter.toUpperCase()}}).join('')
      return [x,y];
    };