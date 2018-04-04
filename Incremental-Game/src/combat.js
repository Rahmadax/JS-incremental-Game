
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

function genCombatScreen(){
    let cbt = document.createElement('div');
    let content = document.getElementById('content');
    let cbtH = document.createElement('div');
    cbtH.setAttribute('id', 'combatBoxHeader');
    cbt.setAttribute('id','combatBox');
    cbt.append(cbtH);
    content.append(cbt);
}