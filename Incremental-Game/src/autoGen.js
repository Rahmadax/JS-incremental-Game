
// Generates a new Sector and stores it to the tableData file.
function genSector(){
    if (remainingSectors.length > 0) {
        let newSector = remainingSectors[Math.floor(Math.random() * remainingSectors.length)];
        remainingSectors.splice(remainingSectors.indexOf(newSector), 1);
        sectors[newSector] = {};
        let areaCode = Math.floor(Math.random()*5);
        let secObj = sectors[newSector]['room'] = {};
        let numberOfRooms = Math.floor(Math.random()*6+4);
        let areaId = (newSector + '-' + areaCode);
        for (let i = 0; i < numberOfRooms; i++)
            secObj[newSector + "-" + areaCode + "-" + i] = newRoom(areaId,i,numberOfRooms);
        showRooms(newSector);
    }
}

// Generates a new room
function newRoom(areaCode, roomCode, numberOfRooms) {
    let newRoom = {};
    let doors = [];
    newRoom['name'] = areaCode + '-' + roomCode;
    if (roomCode === 0) {
        newRoom['type'] = 'corridor';
        for (let i = 1; i < numberOfRooms; i++)
            doors.push(areaCode + '-' + i);
        newRoom['doors'] = doors;
    } else if (roomCode === 1) {
        newRoom['type'] = 'console';
        newRoom['doors'] = [areaCode+'-'+0];
    } else {
        newRoom['type'] = 'standard';
        newRoom['doors'] = [areaCode+'-'+0];
    }
    newRoom['title'] = 'Test';
    newRoom['subtitle'] = 'Test';
    return newRoom;
}

// shows new rooms / doors.
function showRooms(sectorName) {
    let sectorObj = sectors[sectorName].room;
    let keys = Object.keys(sectorObj); // A list of rooms.
    let ab = document.createElement('ul');
    for (let i = 0; i < keys.length; i++) {
        showDoors(sectorObj,keys,i, ab);  // Generates the doors.
    }
    setDoorStatus(sectorObj, keys);
}

// Makes new doors visible.
function showDoors(roomObj,keys,k, ab) {
    let newRoomObj = roomObj[keys[k]];
    let n = newRoomObj.name;
    ab.setAttribute('class', 'actionBar');
    for (let i = newRoomObj.doors.length; i > 0; i--) {
        let d = document.createElement('li');
        if (newRoomObj.type === 'corridor') {
            let newn = n.substring(0, n.length - 1) + (i);
            $(d).attr({
            'id':       newn + 'C',
            'class':    'actionButton door',
            'onclick':  'openDoor(this.id)',
            'type':     newRoomObj.type,
            'conRoom':  n.substring(0, n.length - 1) + i,
            'locked':   'true'
        });
        } else {
            $(d).attr({
            'id':       (n.substring(0, n.length) + 'R'),
            'class':    'actionButton door',
            'onclick':  'openDoor(this.id)',
            'type':     newRoomObj.type,
            'conRoom':  roomObj[keys[0]].name,
            'locked':   'true'
            });
        }
        let tag = document.createElement('p');
        tag.innerHTML = newRoomObj.type;
        ab.append(d);
        d.append(tag);
    }
    let buyBar = document.getElementById('darkBuyBar'); // Change after testing.
    buyBar.append(ab);
}

// Sets the locked status of newly generated doors.
function setDoorStatus(sectorObj, keys){
    for (let i = 1; i < keys.length; i++){
        let namea = document.getElementById(sectorObj[keys[i]].name +'C');
        let nameb = document.getElementById(sectorObj[keys[i]].name +'R');
        namea.setAttribute('isLocked',sectorObj[keys[i]].locked);
        nameb.setAttribute('isLocked',sectorObj[keys[i]].locked);
    }
}

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

// Generates a new tab button.
function genTab(viewName){
    let name = viewName.substring(0,viewName.indexOf('View'));
    let ul = document.getElementById('tabs');
    let newTab = document.createElement('li');
    newTab.setAttribute('id', name+'Container');
    newTab.setAttribute('class', 'tabButtons');
    let newTabText = document.createElement('p');
    newTabText.setAttribute('onclick', 'changeView("'+viewName+'")');
    newTabText.innerHTML = capFirst(name);
    ul.appendChild(newTab);
    newTab.append(newTabText);
    return name + 'Container';
}
