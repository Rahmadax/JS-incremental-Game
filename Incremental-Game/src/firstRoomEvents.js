/* <----------- Darkness Events -----------> */

function getStoryPrompt(feelAB){
	var feelAround = [
		"The floor is stone. Cold to touch.",
		"I hear something. A dripping noise from ahead of me",
		"Reaching out, I can't feel anything around me.",
		"My legs ache, I'm going to try crawling",
		"Hurts to move...",
		"There's a wall here. Stone bricks. I can feel the motor between them.",
		"I found a corner. There's something here. Rough to the touch.",
		"I think it's a blanket...", 
		"There's something under it.",
		"Some kind of metal tube",
		"I think... I think it's a flashlight.",
	];
	var tC = document.getElementById(feelAB).getAttribute("timesClicked");
	
	if (tC == feelAround.length-1){
		document.getElementById("feelAB").setAttribute("isVisible", 'false');
		document.getElementById("flashAB").setAttribute("isVisible", 'true');
	}
	incrementButton("feelAB");
	return feelAround[tC];
}

function testEvent(){
	updateLog("~Personal AI assistant coming online.");
	updateLog("~Beginning processing.");
	updateLog("~Assistant now active. Communicate through terminal.");
}


function lightsOn(){
	document.getElementById("darkView").setAttribute("isVisible", 'false');
	document.getElementById("roomView").setAttribute("isVisible", 'true');
	document.getElementById("darkContainer").setAttribute("isVisible", 'false');
	document.getElementById("roomContainer").setAttribute("isVisible", 'true');
	startOminous();
	checkDisplay();
}


/* <----------- Light Room Events -----------> */

function tubeAction(){
	var tubeInfo = [
		"A 7 foot high glass tube embedded in the wall to the right of the door. I guess I've been in there a while.",
		"All the water I've been laying in drained away somewhere through a grate in the bottom. I really need to get a drink soon.",
		"I wonder how I got in there... ",
		"What the hell was that alarm I heard. Something about life support failing. I should probably be getting out of here.",
	]
	var buttonUsed = document.getElementById("tubeAB");
	var chisel = document.getElementById("chiselBB");
	var tC = buttonUsed.getAttribute("timesClicked");
	if (tC < 4) {
		updateLog(tubeInfo[tC]);
	} else if (chisel.className == "actionButton" && chisel.getAttribute("isVisible") == "true") {
		updateResources("cloth", 1);
		document.getElementById("cloth").setAttribute("isVisible", "true");
		checkDisplay();
		updateLog("I cut out some of the padding with the metal fragment.");
		
	} else {
		updateLog("Not much to see, just a glass tube with some loose wires. There's a padded section at the top.");
	}
	if (tC == 3) {
		document.getElementById("H-120-04").setAttribute("isVisible", "true");
	}
	incrementButton("tubeAB");
}

function firstDoorAction(){
	var doorInfo = [
		"Door's locked up tight. Solid metal. Can't break it down.",
		"There's a code printed on the top, H-120-04, Looks important.",
		"No hope of getting through here, gotta find another way out.",
		"I still hear a dripping noise from the wall opposite the door."
	]
	var buttonUsed = document.getElementById("H-120-04");
	var tC = buttonUsed.getAttribute("timesClicked");
	if (tC < 4) {
		updateLog(doorInfo[tC]);
	} else {
		openDoor("H-120-04");
	}
	if (tC ==3 ){
		document.getElementById("holeAB").setAttribute("isVisible", "true");
	}
	incrementButton("H-120-04");
}

function holeAction(){
	var buttonUsed = document.getElementById("holeAB");
	var tC = buttonUsed.getAttribute("timesClicked");
	incrementButton("holeAB");
	var searchHole = [
		"Small hole, about as round as my arm.",
		"This whole wall looks badly water damaged. The mortar is breaking off.",
		"I can get my arm in. About up to my shoulder.",
		"It's soaking wet in here.",
		"Something growing on the floor here. A dark green moss.",
		"Looks edible but not appetising. I'm so hungry though."
	];
	
	if (tC == 12) {
		document.getElementById("metal").setAttribute("isVisible", "true");
		checkDisplay();
		updateResources("metal", 1);
		document.getElementById("chiselBB").setAttribute("isVisible", "true");
	} else if (tC > searchHole.length) {
		var foundFood = (Math.round(Math.random(50) * 100) / 100);
		updateResources("food",foundFood);
		updateLog("Found " + foundFood.toString() + " food.");
	} else if (tC < searchHole.length){
		updateLog(searchHole[tC]);
	} else {
		var foundFood = (Math.round(Math.random(50) * 100) / 100);
		updateResources("food",foundFood);
		updateLog("Found " + foundFood.toString() + " food.");
		updateLog("I guess I have no choice. I'm going to starve otherwise.");
	}
}
