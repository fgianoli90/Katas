function alphabetPosition(text) {
    return text.toUpperCase().split('')     //Make letters all uppercase, split into array 

                .filter(eachLet=>{          //Filter for letters using charCodeAt() (64 < alphabet < 91) 
                    return eachLet.charCodeAt() > 64
                }).filter(eachLet=>{
                    return eachLet.charCodeAt() <91
                }).map(eachLet=>{           //map the filtered array returning the position of letter in aplhabet
                    return eachLet.charCodeAt()-64
                }).join(" ")                //join array to return string

}