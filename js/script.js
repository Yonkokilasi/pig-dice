//backend
var player1="";
var player2="";

var throwdice= function (){
    return.Math.floor(Math.random()*6) +1;
}
function Player (turn){
    this.roll = 0;
    this.score = 0;
    this.totalscore=0;
    this.turn = turn;
    this.Name;
}

Player.prototype.rollfirst = function(){
    if (this.roll === 1){
        this.score = 0;
    } else{
        this.score += this.roll;
    }
}

// on hold
Player.prototype.hold = function(){
    this.totalscore += this.score;
    this.score =0;
    confirm(this.Name+ "It's the next person's turn!");
}
Player.prototype.winner = function(){
    is (this.totalscore>= 100){
        alert(this.Name"You are the chosen one :)")
    }
}
Player.prototype.newGame = function(){
    this.roll =0;
     this.score = 0;
  this.totalscore = 0;
  this.Name ="";
}