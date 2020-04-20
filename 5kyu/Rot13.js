function rot13(message){

return message.split('')//split into array of sinlge characters
            .map(each=>{return each.charCodeAt()})//map character code number for each character in array
            .map(each=>{ //map character codes
                if ((each + 13)>122){ //check for char codes over 122 after adding 13 (lower case)
                    return String.fromCharCode(each+13-122+96)
                }else if((each + 13)>109){ //check for char codes over 109 after adding 13 (lower case)
                    return String.fromCharCode(each+13)
                }else if ((each + 13)>90){ //check for char codes over 90 after adding 13 (upper case)
                    return String.fromCharCode(each+13-90+64)
                }else if ((each + 13)>77){ //check for char codes over 77 after adding 13 (upper case)
                    return String.fromCharCode(each+13)
                }else{
                    return String.fromCharCode(each) //all other character codes that aren't letters
                }})
            .join('') //join array of characters back into string
}