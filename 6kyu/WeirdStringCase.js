function toWeirdCase(string){
    return string.toLowerCase() //convert string to all same case
                .split(' ') //split string into array of words
                .map(eachWord=>{
                    return eachWord.split('') //split each word into characters
                                .map((e,index)=> 
                                    index%2===0 ? e.toUpperCase() : e ) //if index of character is even make character uppercase else just return character as is
                                .join('') //join characters back into whole word
                })
                .join(' ') //join words back to whole string
  //As one line:
  //string.toLowerCase().split(' ').map(eachWord=>{return eachWord.split('').map((e,index)=> index%2===0 ? e.toUpperCase() : e ).join('')}).join(' ')

}
