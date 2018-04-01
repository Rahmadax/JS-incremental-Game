
// Generates a new Sector and stores it to the tableData file.
function genSector(){
    if (remainingSectors.length > 0) {
        let newSector = remainingSectors[Math.floor(Math.random() * remainingSectors.length)];
        remainingSectors.splice(remainingSectors.indexOf(newSector), 1);
        sectors[newSector] = {};
        let areaCode = Math.floor((Math.random()*5)+1);
        let secObj = sectors[newSector]['room'] = {};
        let numberOfRooms = Math.floor(Math.random()*6+4);
        for (let i = 0; i < numberOfRooms; i++){
            let areaId = (newSector + '-' + areaCode);
            secObj[newSector + "-" + areaCode + "-" + i] = newRoom(areaId,i,numberOfRooms);
        }
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
    let ds = newRoomObj.doors;
    let n = newRoomObj.name;
    let t = newRoomObj.type;
    ab.setAttribute('class', 'actionBar');
    for (let i = ds.length; i > 0; i--) {
        let roomCheck = roomObj[keys[i]];
        let d = document.createElement('li');
        if (t === 'corridor') {
            let newn = n.substring(0,n.length-1)+(i);
            d.setAttribute('id', newn + 'a');
            d.setAttribute('conRoom', n.substring(0,n.length-1)+i);
        } else {
            d.setAttribute('id', n.substring(0,n.length) + 'b');
            d.setAttribute('conRoom', roomObj[keys[0]].name);
        }
        d.setAttribute('class', 'actionButton door');
        d.setAttribute('onclick', 'openDoor(this.id)');
        d.setAttribute('type', newRoomObj.type);
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
        let namea = document.getElementById(sectorObj[keys[i]].name +'a');
        let nameb = document.getElementById(sectorObj[keys[i]].name +'b');
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
