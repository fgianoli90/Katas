function disemvowel(str) {
    //split string to array of letters and filter array only taking letters that are not vowels. And lastly join array back to string.
    return str.split('').filter(letter=> !(letter=="a")&&!(letter=="e")&&!(letter=="i")&&!(letter=="o")&&!(letter=="u")&&!(letter=="A")&&!(letter=="E")&&!(letter=="I")&&!(letter=="O")&&!(letter=="U")).join('')
    //Option2: Use replace to globally replace all vowels in string with empty quotes
    // return str.replace(/a|e|i|o|u/gi,"")

}