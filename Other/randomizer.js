let roster=["Joseph","Victor","Alexis","Maylen","Marissa","Isaac","David","Gustavo","Igor","Jorge","Natalicia","Melvin","Chaba","Nathan","Michael","Francesca"]
//decide how many per group
const numPerGroup = 2
//Based on number per group and total headcount, find number of groups to be made
let numOfGroups = 0
if (roster.length%numPerGroup==0){
  numOfGroups = roster.length/numPerGroup;
}else{
  numOfGroups = Math.floor(roster.length/numPerGroup)
}
//Make teams 
let teams=[]
//Loops for each group to be formed
for (i=0;i<numOfGroups;i++){
  //New team will be place holder for group
  let newTeam=[]
  //Loops for number of people per group
  for (j=0;j<numPerGroup;j++){
    //selects random person from roster
    let teammate=Math.floor(Math.random()*roster.length)
    //push random person from roster to group
    newTeam.push(roster[teammate])
    //Remove random person selected from roster as to not select again
    roster.splice(roster.indexOf(roster[teammate]),1)
  }
//push formed group into team array and start next loop for new group
teams.push(newTeam)
}
//Can console to see if any remaining people not in a group
//console.log(roster)
//If none remaining declare teams
if (roster.length === 0){ console.log(teams)}
//if remaining people count is less than or equal to number of groups
//then assign each person remaining to each group until none left
else if (roster.length <= numOfGroups){
  for (i=0;i<roster.length;i++){
  teams[i].push(roster[i])
  }
  //declare teams once remaining headcount assigned
  console.log(teams)
} 
//if remaining headcount is larger then number of groups
//then form new group with remaining people on roster
else if (roster.length > numOfGroups){
  teams.push(roster)
  console.log(teams) 
}