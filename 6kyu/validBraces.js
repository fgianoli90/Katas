function validBraces(braces){
    
    let count1A = 0;
    let count1B = 0;
    
    let count2A = 0;
    let count2B = 0;
  
    let count3A = 0;
    let count3B = 0;
  
      for (let i =0; i < braces.length; i++) {
        let character = braces[i];
          if (character === "(") {
            count1A += 1;
            }
          if (character === ")") {
            count1B += 1;
              if(count1A<count1B){
              return false
              }
            }
          if (character === "[") {
            count2A += 1;
            }
          if (character === "]") {
            count2B += 1;
            if(count2A<count2B){
              return false
              }
          }
          if (character === "{") {
            count3A += 1;
          }
          if (character === "}") {
            count3B += 1;
            if(count3A<count3B){
              return false
              }
          }
          
      }
        if (count1A === count1B && count2A === count2B && count3A === count3B) {
          return true;
        } 
        else {
          return false;
        }
  }