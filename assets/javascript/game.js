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
        hp: 350,
        attack: 30,
        defense: 20,
        sprite: "assets/images/charmander-gif.gif",
        enemysprite: "assets/images/charmander-attack.gif",
    },
    bulbasaur:{
        hp: 150,
        attack: 30,
        defense: 10,
        id:"bulbasaur",
        sprite: "assets/images/bulbasaur-back.gif",
        enemysprite: "assets/images/bulbasaur-front.gif",
    },
    squirtle:{
        hp: 240,
        attack: 30,
        defense: 15,
        id:"squirtle",
        sprite: "assets/images/squirtle-back.gif",
        enemysprite: "assets/images/squirtle-front.gif",
    },
    pikachu:{
        hp:70,
        attack:50,
        defense:50,
        id:"pikachu",
        sprite: "assets/images/pikachu-back.gif",
        enemysprite: "assets/images/detectivepikachu.jpg"
    },
}
var player = [];
var enemy = [];
var baseAtk = 0;
var pool = Object.keys(pokemon);
$(".btn-attack").hide();

function resetPage(){
    location.reload(true);
}   
    
    function setPlayer(pick){ 
        $("#text-header").text("Choose your enemy");
        $(".view").css("background-image", "url(assets/images/pokemon-gym-background-9.png)");
        pool.splice(pool.indexOf(pick.id),1);
//        pool[pool.indexOf(pick.id)];
        baseAtk = player.attack;
        $(pick).hide();
        $("." + pick.id).empty();
//        $("#p-defense").text("Defense: " + player.defense);
    }
    
    function setEnemy(pick){
        pool.splice(pool.indexOf(pick.id),1);
        for(i=0;i<pool.length;i++){
            $("#"+pool[i]).hide();
            $("."+pool[i]).hide();
        }
        $("#text-header").text("Battle!");
        $("#enemy").html("<img id='enemy-sprite' src=" + enemy.enemysprite+ ">");
        $("#player").html("<img id='player-sprite' src=" + player.sprite+ ">");
        $(pick).hide();
        $("#e-hp").append("HP: " + enemy.hp);
//        $("#e-attack").append("Attack: " + enemy.attack);
        $("#e-defense").append("Defense: " + enemy.defense);
        $(".btn-attack").show();
        $("." + pick.id).empty();
        $("#p-hp").text("HP: " + player.hp);
        $("#p-attack").text("Attack: " + player.attack);
        $(".player-data").prepend('<span id="p-hp-bar" class="d-block">&nbsp; </span>')
        $(".enemy-data").prepend('<span id="e-hp-bar" class="d-block">&nbsp; </span>')
    }  
    
    function displayEnemy(){
        $("#text-header").text("Choose your enemy");
        for(i=0;i<pool.length;i++){
            $("#"+pool[i]).show();
            $("."+pool[i]).show();
        }
        $(".defense").show();
        $(".hp").show();
        $(".btn-attack").hide();
        $(".data").empty();
        $("#enemy").empty();
        enemy = [];
    }

    //select player and enemy
$(".pokemon").on("click",function(){
    console.log(this);
    if (player.length < 1){
        player = pokemon[$(this).attr("id")];
        console.log(player);//store player attr
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
$(".btn-attack").on("click",function(){
   
    player.attack = player.attack + baseAtk;
    player.hp = player.hp - enemy.defense;
    enemy.hp = enemy.hp - player.attack;
    hpBar();
    $("#p-hp").text("HP: " + player.hp);
    $("#p-attack").text("Attack: " + player.attack);
    $("#e-hp").text("HP: " + enemy.hp);
    if(enemy.hp <= 0){
        if(pool.length==0){
            alert("No more!")
            //win condition
        }
        else{
        displayEnemy();
        }
    }
    else if(player.hp <= 0){
        alert("BLACKED OUT");
        $(".btn-attack").hide();
    }
})

    //reset button
$(".btn-reset").on("click",function(){
        resetPage();
    })

    //HP bar
function hpBar(person){
    var percent = person.hp / pokemon[person.id] * 100;
    
}
    
})