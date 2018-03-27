var feelAround = [
		"The floor is stone. Cold to touch.",
		"Reaching out, I can't feel anything around me.",
		"My legs ache, I'm going to try crawling",
		"Hurts to move...",
		"There's a wall here. Stone bricks. I can feel the motor between them.",
		"I found a corner. There's something here. Rough to the touch.",
		"I think it's a blanket...", 
		"There's something under it.",
		"Some kind of metal tube",
		"I think... I think it's a flashlight.",
		
		"The flashlight is dull, but it hurts my eyes if I keep the open.",
		
		"The room's small. Each wall is maybe 10 feet. "
	]
	
	
function updateLog(txt) {
	var ul = document.getElementById("logList");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(txt));
	li.setAttribute("class", "logEntry");
	li.setAttribute("timeCreated", getCreationTime());
	li.setAttribute("opacity", 1);
	ul.insertBefore(li, ul.childNodes[0]);
}


function changeView(roomName, roomCont) {
	var nextRoom = document.getElementById(roomName);
	var mvps = document.getElementsByClassName("mainPanelView");
	for (i = 0; i < mvps.length; i++) {
		mvps[i].setAttribute("isVisible", 'false');
	}
    nextRoom.setAttribute("isVisible", 'true');

	checkDisplay();
}

function lightsOn(){
	document.getElementById("darkView").setAttribute("isVisible", 'false');
	document.getElementById("roomView").setAttribute("isVisible", 'true');
	document.getElementById("darkContainer").setAttribute("isVisible", 'false');
	document.getElementById("roomContainer").setAttribute("isVisible", 'true');
	checkDisplay();
}

function holeAction(){
	var foodFound = (Math.ceil(Math.random(10)*10)).toString();
	updateLog(("Found " + foodFound + " food."));
}

function sleepAction(){
	switch(Math.ceil(Math.random()*4)) {
    case 1: updateLog("Slept for a few hours. Feeling a little better.");
        break;
    case 2: updateLog("Didn't get much sleep. Still feel better for it.");
        break;
	case 3: updateLog("Slept pretty well. Feeling refreshed.");
        break;
	case 4: updateLog("Barely got any shut eye. Heard something by the door all night.");
        break;
	}
}

function doorAction(){
	updateLog("The door's heavy. Wont budge.");
}

function getCreationTime(){
	var d = new Date();
	return (d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' 
	+ d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
}

setInterval(mainLoop, 10);

function mainLoop(){
	checkDisplay();
}

function checkDisplay(){
	mvps = document.getElementsByClassName("mainPanelView");
	for (i = 0; i < mvps.length; i++) {
		if (mvps[i].getAttribute("isVisible") == 'false'){
			mvps[i].style.display = "none";
		} else {
			mvps[i].style.display = "block";
		}
	}
	
	tabConts = document.getElementsByClassName("tabButtons");
	for (i = 0; i < tabConts.length; i++) {
		if (tabConts[i].getAttribute("isVisible") == 'false'){
			tabConts[i].style.display = "none";
		} else {
			tabConts[i].style.display = "block";
		}
	}
}

function getStoryPrompt(bName){
	var buttonUsed = document.getElementById(bName);
	var tC = buttonUsed.getAttribute("timesClicked");
	buttonUsed.setAttribute("timesClicked", parseInt(tC)+1);
	return(tC);
}