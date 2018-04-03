function mainCombatLoop(){
    let monster = generateMonster();
    while (monster.health > 0 && character.health > 0){
        // Combat logic.
    }
    if (character.health <= 0){
        playerDeath();
        changeView(character.home);
    } else {
        getLoot();
    }
}

function generateMonster(){
    return 'Random Mob'
}

function getLoot(){

}

function playerDeath(){

}