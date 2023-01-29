// paper ,sccior,rock
// paper==paper=Tie;
// paper||sccior=scior win;
// rock ||scior=rock

// rock-paper=win paper
// // paper=paper=Tie 
// // secior-paper= secior win
// // secior -rock= rock win
// const prompt=require('prompt-sync')()
// let u1=prompt('please chose some option : paper,sccior,rock');
// let u2=prompt('please chose some option : paper,sccior,rock');
// if((u1==sccior)&&(u2==paper)){
//     console.log('user 1 won');

// }
// else if((u1=="paper") &&( u2=="paper")){
//     console.log("game is tie");
// }
// else if((u1=="sccior") && (u2=="rock")){
//     console.log('u2 win')
// }
// else
// {
//     console.log("Invalid choice");
// }

const prompt=require('prompt-sync')();
let user1=prompt('please enter  paper, scissors, or rock')
 let user2=prompt('please enter paper, scissors, or rock.');
// // let userChoice = prompt()("Please choose one of the following options: paper, scissors, rock");
if(user1 =='rock' && user2 == 'paper') 
{
   console.log('user 2 is win');

 }
 else if(user1 =='paper' && user2 == 'paper'){
     console.log('game is tie');
}
 else if(user1 == 'scissors'&& user2 == 'paper'){
     console.log("user 1 is win");
 }
 else if(user1 == 'scissors'&& user2 == 'rock'){

     console.log("rockwin");
 }
 else{
     console.log("please select valid choice");
 }