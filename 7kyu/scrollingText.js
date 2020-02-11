function scrollingText(text){

    let newArray=[]
    
    for (i=0;i<text.length;i++){
    newArray.push((text.slice(i)+text.slice(0,i)).toUpperCase())
    }
      return newArray
    }