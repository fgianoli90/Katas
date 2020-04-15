
//return true if the number of Xs in the string passed matches the number of Os
//else return false if they do not appear an equal amount of times in string
function XO (str){
    var sumX = 0
    var sumO = 0
    //first iterate through the string and count every time an X appears or everytime an O appears
    for (i=0;i<str.length;i++){
        if (str[i]==="o" || str[i]==="O"){
        sumO = sumO+1
        }

        if (str[i]==="x" || str[i]==="X"){
        sumX = sumX + 1
        }
    }
    //If string contains neither and sums both equal zero, or if sums equal eachother return true
    //Any other answer return false
    if (sumO === 0 && sumX ===0){
        return true
    } else if (sumO === sumX) {
        return true
    } else {
        return false
    }
}
    