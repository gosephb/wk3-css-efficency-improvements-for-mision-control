function countdownTimer() {
    console.log("countdownTimer working");
    var currTime = 50;
    document.getElementById("countdownStatus").innerHTML = currTime;
    currTime = currTime -5;

    //time for 45
    setTimeout(function(){
       //stuff in here happens after time out
       document.getElementById("countdownStatus").innerHTML = currTime;
       currTime = currTime -5;
    }, 5000);

    //timer for 40
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime -5;
     }, 10000);
    
     //timer for 35
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime -5;
     }, 15000);

     //timer for 30
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime -5;
     }, 20000);

     //timer for 25
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime -5;
     }, 25000);

     //timer for 20
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime -5;
     }, 30000);

     //timer for 15
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime -5;
     }, 35000);

     //timer for 10
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime -5;
     }, 40000);

     //timer for 5
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime -5;
     }, 45000);

     //timer for 0
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = "Blastoff!";
        currTime = currTime -5;
     }, 50000);

}

//crap game function works in this function.
function playCraps(){
   //game started
   console.log("Craps game initated");
   // dice rolling function giving you six sides of adice or numbers 1-6 on die1
   var die1 = Math.ceil(Math.random()*6);
      // dice rolling function giving you six sides of adice or numbers 1-6 on die2
   var die2 = Math.ceil(Math.random()*6);
   //gets the value of die1
   document.getElementById("die1Res").innerHTML = die1;
   //gets the value of die2
   document.getElementById("die2Res").innerHTML = die2;
   //gets the value of both dice
   var dieSum = die1 + die2;
   document.getElementById("dieSum").innerHTML = dieSum;
   //if you get a 7 or 11 you lose
   if(dieSum == 7 || dieSum == 11){
      document.getElementById("crapStatus").innerHTML = "Craps! you lose!!";
      //if two numbers of die are the same you win
   }else if(die1 == die2 && die1 % 2 == 0){ 
      document.getElementById("crapStatus").innerHTML = "Doubles you win";
      //if numbers are not doubles or sum = 11 or 7 roll agian you dont win or lose
   }else{
      document.getElementById("crapStatus").innerHTML = "You did not lose and you did not win. Please try again.";
   }
}

function btrCountdownTimer(){
   //increase speed by 10, please decrease by final product
   console.log("btrCountdownTimer() started");
   var currTime = 50;
   for(var i = 0; i <10; i++){
      setTimeout(function(){
         console.log(i);
         document.getElementById("countdownStatus").innerHTML = currTime;
         currTime = currTime - 5;
      },500 * i);
   
   }
   setTimeout(function(){
      document.getElementById("countdownStatus").innerHTML = "Blastoff";
   }, 5000); 
}
