// Creates new buy buttons and updates the item table. Takes the Item table key.
function genBuyButton(item){
    let itemRef = items[item];
    if (itemRef.available === 'true'){
        let ul = document.getElementById(itemRef.buyBar);
        let newBuy = document.createElement('li');     // Create a new list item
        let newBuytext = document.createElement('p');  // P tag inside the list item
        let newBuyTT = document.createElement('span'); // Create the new Tool tip
        let keys = Object.keys(itemRef.cost);
        let costs = Object.values(itemRef.cost);

        newBuyTT.setAttribute('class', 'tooltiptext');
        newBuyTT.setAttribute('id', (itemRef.name + 'TT'));
        newBuyTT.innerHTML = '';
        for (let i = 0; i < costs.length; i++)
            newBuyTT.innerHTML += (costs[i] + ' ' + keys[i] +"  ");

        newBuytext.innerHTML = itemRef.name.replace("_", " ");
        newBuy.setAttribute('class', 'actionButton');
        newBuy.setAttribute('id', (itemRef.name + 'BB'));
        if (itemRef.extraFunction != null){
            newBuy.setAttribute('onClick', "attemptBuy("+ "'" +itemRef.name + "'); " + itemRef.extraFunction);
        } else {
            newBuy.setAttribute('onClick', 'attemptBuy("'+ itemRef.name +'")');
        }


        ul.appendChild(newBuy);
        newBuy.append(newBuytext);
        newBuytext.append(newBuyTT);

        itemRef.available = 'false';                   // Stops object being created twice.
        updateLog(itemRef.availableMsg);
    }
}

function genTab(viewName){
    let name = viewName.substring(0,viewName.indexOf('View'));
    let ul = document.getElementById('tabs');
    let newTab = document.createElement('li');
    newTab.setAttribute("id", name+"Container");
    newTab.setAttribute("class", "tabButtons");
    let newTabText = document.createElement('p');
    newTabText.setAttribute("onclick", 'changeView("'+viewName+'")');
    newTabText.innerHTML = capFirst(name);
    ul.appendChild(newTab);
    newTab.append(newTabText);
    return name + "Container";
}

function genSector(){
    if (remainingSectors.length > 0) {
        let newSector = remainingSectors[Math.floor(Math.random() * remainingSectors.length)];
        remainingSectors.splice(remainingSectors.indexOf(newSector), 1);
        sectors[newSector] = {};
        let areaCode = Math.floor((Math.random()*5)+1);
        let secObj = sectors[newSector]['rooms'] = {};
        let numberOfRooms = Math.floor(Math.random()*10+4);
        for (let i = 0; i < numberOfRooms; i++){
            let areaId = (newSector + '-' + areaCode);
            secObj[newSector + "-" + areaCode + "-" + i] = newRoom(areaId,i,numberOfRooms);
        }
    }
}

function newRoom(areaCode, roomCode, numberOfRooms) {
    let newRoom = {};
    let doors = [];
    newRoom['id'] = areaCode + '-' + roomCode;
    if (roomCode === 0) {
        newRoom['type'] = 'corridor';
        for (let i = 1; i < numberOfRooms; i++) {
            doors.push(areaCode + '-' + i);
        }
        newRoom['doors'] = doors;
    } else if (roomCode === 1) {
        newRoom['type'] = 'console';
        newRoom['doors'] = [areaCode+'-'+0];
    } else {
        newRoom['type'] = 'standard';
        newRoom['doors'] = [areaCode+'-'+0];
    }
    return newRoom;
}

function genRoom(sectorName) {
    let sectorObj = sectors[sectorName].room;
    let keys = Object.keys(sectorObj);
    for (let i = 0; i < keys.length; i++) {
        showRoom(sectorObj[keys[0]]);
    }
}

function showRoom(roomObj){

}

    /*
    let cont = document.getElementById('roomViews');
    let mpv = document.createElement('div');
    let vct = document.createElement('div');
    let panelTitle = document.createElement('p');
    let panelSubTitle = document.createElement('p');
    let vcm = document.createElement('div');
    let lvp = document.createElement('div');
    let rvp = document.createElement('div');

    let roomCode = sectorName + "-" + roomcode +"View";
    mpv.setAttribute("id", roomCode);
    mpv.setAttribute("class", "mainPanelView");
    mpv.setAttribute("relatedCont", genTab(roomCode));
    cont.append(mpv); */


function chooseRoom(){
    switch (Math.floor(Math.random()*4)) {
        case 0:
            return ("Console");
        case 1:
            return ("Room");
        case 2:
            return ("Storage");
        case 3:
            return ("Maintenance");
    }
}