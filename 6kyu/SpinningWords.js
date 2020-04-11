function spinWords(str){
    //Split str to get array of words, and map through eah word checking for length of 5 or more letters to reverse word. Then join string again to return.
    return str.split(" ").map((eachWord)=> eachWord.length > 4 ? eachWord.split('').reverse().join('') : eachWord).join(' ')
  }