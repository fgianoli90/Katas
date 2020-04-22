function tickets(peeps){
    //register starts off with 0 bills
    let bill25=0
    let bill50=0
    let bill100=0
    //Set answer to yes until circumstances change it to no
    let ans="YES"
    let i=0
    //Use while loop to run iterations until answer changes to NO or iterate through line of people
      while (i<peeps.length){
        //set variable for element in array
        let customerAmount=peeps[i]
        //Add bill to count depending on amount
        if(customerAmount==25){
          bill25++
        }else if(customerAmount==50){
          bill50++
        }else if(customerAmount==100){
          bill100++
        }
        //Calculate change needed based on bill amount
        let change=customerAmount-25
        //depending on change amount, subtract bills that will be used for change
        if (change==25){
          bill25--
        }else if (change==75){
          if(bill50>=1){
          bill50--
          bill25--
          }else{
          bill25=bill25-3
          }
        }
        //if any bill count is less than zero then change couldn't be provided
        if(bill25<0 || bill50<0){
          ans="NO"
          break;
        }
        
        i++
      }
      return ans
      
    }