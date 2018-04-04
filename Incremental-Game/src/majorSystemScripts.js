
setInterval(mainLoop, 10); /* The game tick speed. */

function mainLoop(){
      /* Major game loop logic goes in here */
    updateElements();
}

function updateLog(txt) {
	let ul = document.getElementById("logList");
	let li = document.createElement("li");
	if (txt.charAt(0) === ">") {
        alert('Here');
        $(li).attr({"class": "announcement"});
    } else if (txt.charAt(0) === "~") {
        $(li).attr({"class": "assistant"});
    } else if (txt.charAt(0) === "#") {
        $(li).attr({"class": "effect"});
    } else {
	    txt = '-'+txt;
	    $(li).attr({"class":"logEntry"});
	}
    txt = (txt.substring(1,txt.length));
	li.appendChild(document.createTextNode(txt));
    $(li).attr({"timeCreated":getCreationTime()});
	ul.insertBefore(li, ul.childNodes[0]);
	fullLog.push(txt);
    fadeOut();
}

function getCreationTime(){
    let d = new Date();
    return (d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' '
        + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
}

function fadeOut() {
    let ul = document.getElementById("logList");
    let logEntries = ul.getElementsByTagName("li");
    for (let i = 0; i < logEntries.length; i++) {
            (logEntries[i]).style.opacity = ((1-i*0.10)+0.3).toString();
    }
}

function openDoor(doorID) {
    let door = document.getElementById(doorID);
    if (door.getAttribute("islocked") === 'true') {
        updateLog("Door's heavy. Wont budge. The code " + doorID + " is printed just above the door.");
    } else {
        if (doorID.substring(doorID.length-1, doorID.length) === 'R'){
            changeView(doorID.substring(0,doorID.length-2)+'0');
        } else {
            changeView(doorID.substring(0, doorID.length - 1));
        }
    }
}

function changeView(conRoom) {
	let nextRoom = document.getElementById(conRoom);
	let mvps = document.getElementsByClassName("mainPanelView");
	for (let i = 0; i < mvps.length; i++) {
		mvps[i].setAttribute("isVisible", 'false');
	}
	nextRoom.setAttribute("isVisible", 'true');
}

function buttonDisable(buttonId){
	let timesRun = 0;
	let buttonPressed = document.getElementById(buttonId);
	buttonPressed.classList.remove("actionButton");
	buttonPressed.classList.add("actionButtonOff");
	let interval = setInterval(function(){
		if(timesRun === 1){
			buttonPressed.classList.remove("actionButtonOff");
			buttonPressed.classList.add("actionButton");
			clearInterval(interval);
		}
		timesRun += 1;
	}, 2000);
}

function buttonDisablePerm(buttonId){
	let buttonPressed = document.getElementById(buttonId);
	buttonPressed.setAttribute("onclick", "");
	buttonPressed.classList.remove("actionButton");
	buttonPressed.classList.add("actionButtonOff");
}

function updateElements() {
    showResources();
    showCoreDisplay();
}

function showCoreDisplay(){
	let mvps = document.getElementsByClassName("mainPanelView");
	for (let i = 0; i < mvps.length; i++) {
		if (mvps[i].getAttribute("isVisible") === 'false')
			mvps[i].style.display = "none";
		else
			mvps[i].style.display = "block";
	}
	let tabConts = document.getElementsByClassName("tabButtons");
	for (let i = 0; i < tabConts.length; i++) {
		if (tabConts[i].getAttribute("isVisible") === 'false')
			tabConts[i].style.display = "none";
		else
			tabConts[i].style.display = "block";
	}
	let rCs = document.getElementsByClassName("resourceCounter");
	for (let i = 0; i < rCs.length; i++) {
		if (rCs[i].getAttribute("isVisible") === 'false')
			rCs[i].style.display = "none";
		else
			rCs[i].style.display = "block";
	}
}

function showResources(){
    $('#resBar').empty();
    let resTab = document.getElementById('resBar');
    let keys = Object.keys(resources);
    let values = Object.values(resources);
    for (let i = 0; i < keys.length; i++){
        if (values[i] > 0){
            let li = document.createElement('li');
            let txt = document.createElement('p');
            li.setAttribute('class','resCounter');
            txt.innerHTML = (keys[i] + ': ' + values[i]);
            li.append(txt);
            resTab.append(li);
        }
    }
}