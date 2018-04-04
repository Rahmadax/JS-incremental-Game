
function buildAndShow(){
    let sectorInfo = genNewSector();
    showSector(sectorInfo[0],sectorInfo[1]);
}

// Generates a new Sector and stores it to the tableData file.
function genNewSector(){
    if (remainingSectors.length > 0) {
        let newSector = remainingSectors[Math.floor(Math.random() * remainingSectors.length)];
        remainingSectors.splice(remainingSectors.indexOf(newSector), 1);
        sectors[newSector] = {};
        let sectorObj = sectors[newSector]['room'] = {};
        let numberOfRooms = Math.floor(Math.random()*6+4);
        for (let i = 0; i < numberOfRooms; i++)
            sectorObj[newSector + "-" +  + "-" + i] = newRoom(i,numberOfRooms);
        return [newSector]; // only used when building and showing.
    }
}

// Generates a new room
function newRoom(roomCode, numberOfRooms) {
    let newRoom = {};
    let doors = [];
    let ABon = [];
    let ABoff = ['TestABOff'];
    let BBon = ['TestBBOn'];
    let BBoff = ['TestBBOff'];
    newRoom['name'] = roomCode;
    if (roomCode === 0) {
        newRoom['type'] = 'corridor';
        for (let i = 1; i < numberOfRooms; i++)
            doors.push(i);
        newRoom['doors'] = doors;
    } else if (roomCode === 1) {
        newRoom['type'] = 'console';
        newRoom['doors'] = [areaCode+'-'+0];
        ABon.push('Activate');
        ABon.push('Deactivate');
        ABon.push('Search');
    } else {
        newRoom['type'] = 'standard';
        newRoom['doors'] = [areaCode+'-'+0];
    }
    newRoom['actionButtonsOn'] = ABon;
    newRoom['actionButtonsOff'] = ABoff;
    newRoom['buyButtonsOn'] = BBon;
    newRoom['buyButtonsOff'] = BBoff;
    newRoom['locked'] = 'true';
    newRoom['title'] = 'Test';
    newRoom['subtitle'] = 'Test';
    return newRoom;
}

// Creates new buy buttons and updates the item table. Takes the Item table key.
function genBuyButton(item){
    let itemRef = items[item];
    if (itemRef.available === 'true'){
        let ul = document.getElementById(itemRef.buyBar);
        let newBuy = document.createElement('li');     // Create a new list item
        let newBuyText = document.createElement('p');  // P tag inside the list item
        let newBuyTT = document.createElement('span'); // Create the new Tool tip
        let keys = Object.keys(itemRef.cost);
        let costs = Object.values(itemRef.cost);

        newBuyTT.setAttribute('class', 'tooltiptext');
        newBuyTT.setAttribute('id', (itemRef.name + 'TT'));
        newBuyTT.innerHTML = '';
        for (let i = 0; i < costs.length; i++)
            newBuyTT.innerHTML += (costs[i] + ' ' + keys[i] +"  ");

        newBuyText.innerHTML = itemRef.name.replace("_", " ");
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
