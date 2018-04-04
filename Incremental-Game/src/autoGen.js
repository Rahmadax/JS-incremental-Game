
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
        genTab( newSector + '-' + areaCode + 'View', (areaId+ '-' + '0'));
    }
}

// Generates a new room
function newRoom(areaCode, roomCode, numberOfRooms) {
    let newRoom = {};
    let doors = [];
    let ABon = [];
    let ABoff = ['TestABOff'];
    let BBon = ['TestBBOn'];
    let BBoff = ['TestBBOff'];
    newRoom['name'] = areaCode + '-' + roomCode;
    if (roomCode === 0) {
        newRoom['type'] = 'corridor';
        for (let i = 1; i < numberOfRooms; i++)
            doors.push(areaCode + '-' + i);
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

// shows new rooms / doors.
function showRooms(sectorName) {
    let sectorObj = sectors[sectorName].room;   // a list of rooms.
    let keys = Object.keys(sectorObj);          // A list of rooms names.
    generateViews(sectorObj, keys);
    for (let i = 0; i < keys.length; i++) {
        showDoors(sectorObj,keys,i);        // Generates the doors.
        showActionButtons(sectorObj, keys[i]);
    }
    setDoorStatus(sectorObj, keys);
}

// Generates the view screens for main view panel.
// sectorObj has a list of rooms, keys has a list of room names
function generateViews(sectorObj, keys){
    let views = document.getElementById('roomViews');   // The master view container
    for (let i = 0; i < keys.length; i++){
        let thisRoom = sectorObj[keys[i]];              // Getting the keys for the i-th room of a sector.
        let view = document.createElement('div');       // Full view container
        let vct = document.createElement('div');        // View title container
        let title = document.createElement('p');        // View Title P tag
        let subTitle = document.createElement('p');     // View Subtitle P tag
        let vcm = document.createElement('div');        // View container main
        let lvp = document.createElement('div');        // Left view panel
        let rvp = document.createElement('div');        // Right view panel
        let lab = document.createElement('ul');         // Left action bar
        let rab = document.createElement('ul');         // Right action bar

        $(view).attr({
            'id': (thisRoom.name),
            'class': 'mainPanelView',
            'lifeSupport': 100
        });
        if (i === 0){
            view.setAttribute('relatedCont', thisRoom.name.substring(0,3)+'Container');
        }

        $(vct).attr({'class': 'viewContainerTitle'});
        $(title).attr({'id': 'title' + thisRoom.name, 'class': 'panelTitle'});
        title.innerHTML = thisRoom.name;
        $(subTitle).attr({'id': 'subTitle' + thisRoom.name, 'class': 'panelSubTitle'});

        $(vcm).attr({'class': 'panelTitle'});
        $(lvp).attr({'id': 'lvp' + thisRoom.name, 'class': 'leftViewPanel'});
        $(rvp).attr({'id': 'rvp' + thisRoom.name,'class': 'rightViewPanel'});

        $(lab).attr({'id': 'lab' + thisRoom.name, 'class': 'actionBar'});
        $(rab).attr({'id': 'rab' + thisRoom.name,'class': 'actionBar'});

        views.append(view);
        view.append(vct);
        vct.append(title);
        vct.append(subTitle);
        view.append(vcm);
        vcm.append(lvp);
        lvp.append(lab);
        vcm.append(rvp);
        rvp.append(rab);
    }
}

// Gen action buttons
function showActionButtons(sectorObj, thisRoom){
    alert(sectorObj[thisRoom]);
    let actionOn = sectorObj[thisRoom].actionButtonsOn;
    let actionOff = sectorObj[thisRoom].actionButtonsOff;
    let buyOn = sectorObj[thisRoom].buyButtonsOn;
    let buyOff = sectorObj[thisRoom].buyButtonsOff;
    let lAB = document.getElementById('lab' + thisRoom);
    let rAB = document.getElementById('rab' + thisRoom);

    for (let i = 0; i < longLen(actionOn,buyOn); i++){
        if (actionOn[i] != null){
            let ab = document.createElement('div');
            let abText = document.createElement('p');
            $(ab).attr({'id':actionOn[i], 'class':'actionButton', 'onclick':actionOn[i]+'Action(this.id)'});
            abText.innerHTML = actionOn[i];
            lAB.append(ab);
            ab.append(abText);
        }
        if (buyOn[i] != null){
            let ab = document.createElement('div');
            let abText = document.createElement('p');
            $(ab).attr({'id':buyOn[i], 'class':'actionButton', 'onclick':'attemptBuy("'+buyOn[i]+'")'});
            abText.innerHTML = buyOn[i];
            rAB.append(ab);
            ab.append(abText);
        }
    }
    for (let j = 0; j < longLen(actionOff,buyOff); j++){
        if (actionOff[j] != null) {
            let ab = document.createElement('div');
            let abText = document.createElement('p');
            $(ab).attr({'id':actionOff[j], 'class':'actionButtonOff'});
            abText.innerHTML = actionOff[j];
            lAB.append(ab);
            ab.append(abText);
        }
        if (buyOff[j] != null){
            let ab = document.createElement('div');
            let abText = document.createElement('p');
            $(ab).attr({'id': buyOff[j], 'class': 'actionButtonOff',});
            abText.innerHTML = buyOff[j];
            rAB.append(ab);
            ab.append(abText);
        }
    }
}



// Makes new doors visible.
function showDoors(sectorObj,keys,k) {
    let thisRoom = sectorObj[keys[k]];
    let buyBar = document.getElementById('lab' + thisRoom.name);
    let n = thisRoom.name;
    for (let i = thisRoom.doors.length; i > 0; i--) {
        let door = document.createElement('li');
        let tag = document.createElement('p');
        if (thisRoom.type === 'corridor') {
            let newn = n.substring(0, n.length - 1) + (i);
            $(door).attr({
            'id': newn + 'C',
            'class': 'actionButton',
            'type': thisRoom.type,
            'relatedCont':(sectorObj[keys[0]].name.substring(0,3)),
             'onclick':    'openDoor("'+newn+'C")'
            });
            tag.innerHTML = 'A room';
        } else {
            $(door).attr({
            'id':       (n + 'R'),
            'class':    'actionButton',
            'type':     thisRoom.type,
            'onclick':  'openDoor("'+n+'R")'
            });
            tag.innerHTML = 'Corridor';
            door.setAttribute('conRoom',sectorObj[keys[0]].name);
        }

        door.append(tag);
        buyBar.append(door);
    }
}

// Sets the locked status of newly generated doors.
function setDoorStatus(sectorObj, keys){
    for (let i = 1; i < keys.length; i++){
        let nameC = document.getElementById(sectorObj[keys[i]].name +'C');
        let nameR = document.getElementById(sectorObj[keys[i]].name +'R');
        nameC.setAttribute('isLocked',sectorObj[keys[i]].locked);
        nameR.setAttribute('isLocked',sectorObj[keys[i]].locked);
    }
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

// Generates a new tab button.
function genTab(viewName, viewLink){
    let name = viewName.substring(0,viewName.indexOf('View'));
    let ul = document.getElementById('tabs');
    let newTab = document.createElement('li');
    newTab.setAttribute('id', name);
    newTab.setAttribute('class', 'tabButtons');
    let newTabText = document.createElement('p');
    newTabText.setAttribute('onclick', 'changeView("'+viewLink+'")');
    newTabText.innerHTML = 'Sector ' + capFirst(name);
    newTab.style.backgroundColor = 'grey';
    ul.appendChild(newTab);
    newTab.append(newTabText);
}
