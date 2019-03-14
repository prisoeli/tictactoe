$(document).ready(function(){

var turn = 1;
var play = true;

$("td").click(function(){
    
    if($(this).text() === ""){
        if(turn%2 === 1){
            $(this).text("X");
        }
        else 
            $(this).text("O");
        turn++;
        
    }

    if(checkWin()==="X"){
        $("#output").text("P1 WINS!");
        play = false;
    }
    else if(checkWin()==="O"){
        $("#output").text("P2 WINS!");
        play = false;
    }
    else if(checkWin()===-1 && turn === 10){
        $("#output").text("CAT'S GAME. GET THE CHEESE!")
        play = false;
    }

})


$("button").click(function(){
    turn = 1;
    play = true;
    reset();
})

});


var checkWin = function(){

    var space=[];
    for (var i=0; i<9; i++){
        space.push($("#space"+i).text());
    }

    if ((space[0]===space[3])&&(space[3]===space[6])){
        return space[6];
    }
    else if((space[2]===space[5])&&(space[5]===space[8])){
        return space[8];
    }
    //horizontal check
    else if((space[0]===space[1])&&(space[1]===space[2])){
        return space[2];
    }
    else if((space[3]===space[4])&&(space[4]===space[5])){
        return space[5];
    }
    else if((space[6]===space[7])&&(space[7]===space[8])){
        return space[8];
    }
    //diagonal check
    else if((space[0]===space[4])&&(space[4]===space[8])){
        return space[8];
    }
    else if((space[2]===space[4])&&(space[4]===space[7])){
        return space[7];
    }

    else{
        return space[-1];
    }
    
}

var reset = function(){
for (var i=0; i< 9; i++){
    $("#space" + i).text("");
}
$("#output").text("");
}