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
var clear = function(){
    $(".player1Name").val("");
     $(".player2Name").val("");
    
}
//front-end

$(document).ready(function(event){
    $("button#start").click(function(event){
        player1 = new Player (true);
        player2 - new Player (false);
        $(".player-panel").show();
        $(".startmenu").hide();
    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName=player1Name;
    player2.playerName=player2Name;
    });
    $("button#newgame").click(function(event){
        $(".player-panel").hide();
        clear();
        player1.newGame();
        player2.newGame();
        $("#round-total-1").empty
         $("#total-score-1").empty();
         $("#die-roll-1").empty();
         $("#round-total-2").empty();
         $("#total-score-2").empty();
         $("#die-roll-2").empty();
         $(".start-menu").show();
    });
    $("button.btn-roll-p1").click(function(event){
        player.roll = throwdice();
        $("#die-roll-1").text(player1.roll);
        player1.rollfirst();
        ("#round-total-1").text
    })
    
//    $("form#players").submit(){
//        var player1Name=$("input#first").val();
//        var player2Name=$("input#second").val();
//    
})