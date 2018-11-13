//Choose character, initiate objects
//Click on person to attack
//HP, attack, counter
//attack is dynamic, counter is static

//pokemon theme
//charmander/bulbasaur/squirtle/pikachu
//

$(document).ready(function() {
var pokemon = {
    charmander:{
        hp: 20,
        attack: 30,
        counter: 20,
    },
    bulbasaur:{
        hp: 110,
        attack: 30,
        counter: 20,
    },
    squirtle:{
        hp: 220,
        attack: 30,
        counter: 20,
    },
    pikachu:{
        hp:420,
        attack:430,
        counter:420,
    }
}
var player = [];
var enemy = [];

function reset(){
    
}   
//set page
function set(){
    
}
    
    function battle(pick){ 
        $("#text-header").text("Choose your enemy");
        $(".view").css("background-image", "url(assets/images/pokemon-gym-background-9.png)");
//        $(pick).hide();
        $("#player").append(pick)

    }

    //select player and enemy
$(".pokemon").on("click",function(){
    if (player.length < 1){
        player = pokemon[$(this).attr("id")]; //store player attr
        battle(this); //set battle
    }
    else{
        console.log("hi");
    }
    })
})