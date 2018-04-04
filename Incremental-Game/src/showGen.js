// shows new rooms / doors.
function showSector(sectorName) {
    $('#roomViews').empty();
    let roomsObj = sectors[sectorName].room;   // a list of rooms.
    let keys = Object.keys(roomsObj);          // A list of rooms names.
    showViews(roomsObj, keys);
    for (let i = 0; i < keys.length; i++) {
        let thisRoomObj = roomsObj[keys[i]];
        showDoors(thisRoomObj);        // Generates the doors.
        showActionButtons(roomsObj, keys[i]);
        setDoorStatus(thisRoomObj);
    }
    newTab( sectorName + 'View', sectorName);
}

// Gen action buttons
function showActionButtons(sectorObj, thisRoom){
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

function showDoors(thisRoomObj){
    let doorsObj = thisRoomObj.doors; // list of doors.
    let buyBar = document.getElementById('lab' + thisRoomObj.name);
    let keys = Object.keys(doorsObj);
    let values = Object.values(doorsObj);
    for (let i = 0; i < values.length; i++){
        let doorValues = Object.values(doorsObj[keys[i]]);
        let door = document.createElement('li');
        let doorIndex = doorValues[0].indexOf('>');
        $(door).attr({
            'id': doorValues[0],
            'class': 'actionButton',
            'isLocked': 'false',
            'onclick':    'openDoor("'+doorValues[0]+'")'
        });
        let doorTxt = document.createElement('p');
        doorTxt.innerHTML = doorValues[0].substring(doorIndex+1,doorValues[0].length);
        door.append(doorTxt);
        buyBar.append(door);
    }
}

// Sets the locked status of newly generated doors.
function setDoorStatus(thisRoomObj){
    let doors = thisRoomObj.doors;
    let keys = Object.keys(doors);
    let values = Object.values(doors);
    for (let i = 0; i < values.length; i++){
        let thisDoor = document.getElementById(thisRoomObj.doors[keys[0]].name);
        thisDoor.setAttribute('isLocked',thisRoomObj.doors[keys[i]].isLocked);
    }
}

// Generates a new tab button.
function newTab(viewName, viewLink){
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

// Generates the view screens for main view panel.
// sectorObj has a list of rooms, keys has a list of room names
function showViews(sectorObj, keys){
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
        if (i === 0) {
            view.setAttribute('relatedCont', thisRoom.name.substring(0, 3) + 'Container');
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