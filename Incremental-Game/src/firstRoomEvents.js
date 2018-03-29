

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
	var tC = buttonUsed.getAttribute("timesClicked");
	if (tC < 4) {
		updateLog(tubeInfo[tC]);
	} else if (document.getElementById("chiselBB").getAttribute("isActive") == "true") {
		updateResources("cloth", 1);
		document.getElementById("cloth").setAttribute("isVisible", "true");
		checkDisplay();
		updateLog("I cut out some of the padding with the metal fragment.");
		
	} else {
		updateLog("Not much to see, just a glass tube with some wires hanging from the top. There's a padded section at the top.");
	}
	if (tC == 3) {
		document.getElementById("H-120-04").setAttribute("isVisible", "true");
	}
	incrementButton("tubeAB");
}

function firstDoorAction(){
	var doorInfo = [
		"Door's locked up tight. It's solid metal, way too sturdy for me to break through.",
		"There's a code printed on the top, H-120-04, I wonder if that's important.",
		"No hope of getting through here, I'll have to find another way out.",
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
		"I think I can just fit my arm in.",
		"It's tight, but I can almost get all the way up to my shoulder through.",
		"I can just touch another wall. It's slimy. Covered in something.",
		"Some kind of light green moss. I think I can scrape a little off with my fingers."
	];
	if (tC == 12) {
		document.getElementById("metal").setAttribute("isVisible", "true");
		checkDisplay();
		updateResources("metal", 1);
		document.getElementById("chiselBB").setAttribute("isVisible", "true");
		return ("Found a lump of metal in the crawlspace. Pretty sharp. Might be able to find a use for it");
	}
	
	if (tC < 4){
		return(searchHole[tC]);
	} else {
		var foundFood = (Math.round(Math.random(50) * 100) / 100);
		updateResources("food",foundFood);
		return("Found " + foundFood.toString() + " food.");
		
	}
}
