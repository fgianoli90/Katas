const ticker = (text, width, tick) => {
    //Make the string text into an array so to push letters into display through loop
    let x = text.split('')
    //create the display as an array of
    let display =[]
      //Make array for display i.e width 10; display=[ , , , , , , , , , ]
      for (a=0;a<width;a++){
        display.push(" ")
      }
      //Make variable total that adds up total of text and width to set point which display will restart the text
      let total=x.length+width
      
      for (i=0;i<tick;i++){
        //For every tick you want to delete the first index in the display
        display.shift()
        //And then add new index to end of the display
        //if i is less that means there are still letters to be added to display all of the text
        if(i<x.length){
        display.push(x[i])
        //if i is less than total display has not yet reached original display meaning text still 
        //on display at beginning of array so continue to push spaces until nothing shown while remaining within width
        }else if(i<total) {
          display.push(" ")
        //once text cleared push first index of text to reloop text through display
        }else{
          display.push(x[i-(x.length+width)])
        }
      }
     
      return display.join('')
    }
          