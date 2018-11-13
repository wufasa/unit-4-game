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
        defense: 20,
    },
    bulbasaur:{
        hp: 110,
        attack: 30,
        defense: 20,
    },
    squirtle:{
        hp: 220,
        attack: 30,
        defense: 20,
    },
    pikachu:{
        hp:420,
        attack:430,
        defense:420,
    }
}
var player = [];
var enemy = [];

function reset(){
    
}   
//set page
function set(){
    
}
    
    function setPlayer(pick){ 
        $("#text-header").text("Choose your enemy");
        $(".view").css("background-image", "url(assets/images/pokemon-gym-background-9.png)");
//        $(pick).hide();
        $("#player").html(pick)
        $("#p-hp").text("HP: " + player.hp);
        $("#p-attack").text("Attack: " + player.attack);
        $("#p-defense").text("Defense: " + player.defense);

    }
    
    function setEnemy(pick){
        $("#text-header").text("Battle!");
        $("#enemy").html(pick);
        $(".blank").empty(); //not emptying charmander
        $("#e-hp").append("HP: " + enemy.hp);
        $("#e-attack").append("Attack: " + enemy.attack);
        $("#e-defense").append("Defense: " + enemy.defense);
    }

    //select player and enemy
$(".pokemon").on("click",function(){
    if (player.length < 1){
        player = pokemon[$(this).attr("id")]; //store player attr
        setPlayer(this); //set battle
    }
    else if(enemy.length < 1){//enemy has been chosen
        enemy = pokemon[$(this).attr("id")];
        setEnemy(this);//store enemy values
        //display enemy, display attack button
        
        
    }
    else{
        //Do nothing;
    }
    })
    
    
    //attack button code
    //when a kill is scored, redisplay pokemon
    //win condition
    //reset button
})