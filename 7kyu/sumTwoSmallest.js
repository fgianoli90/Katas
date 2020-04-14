function sumTwoSmallestNumbers(numbers){  
    let num1=numbers[0];
    let num2=numbers[1] ;                                      
    numbers.shift();
            
    numbers.forEach(num =>{
        if (num < num1){
            num2=num1;
            num1=num;
        } else if (num<num2){
            num2=num;
        }
    })
    let sumOf = num1 +num2
return sumOf
}