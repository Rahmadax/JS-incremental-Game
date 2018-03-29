/*---------- General Functions ----------*/
function incrementButton(bName){
	var buttonUsed = document.getElementById(bName);
	var tC = buttonUsed.getAttribute("timesClicked");
	buttonUsed.setAttribute("timesClicked", parseInt(tC)+1);
}

function openDoor(doorID){
	var door = document.getElementById(doorID);
	var conRoom = door.getAttribute("conRoom");
	if (door.getAttribute("isLocked") == 'true'){
		updateLog("Door's heavy. Wont budge. " + "The code " + doorID + " is printed just above the door.");
	} else {
		checkDisplay();
		changeView(conRoom);
	}
}

function unlockDoor(doorID){
	var door = document.getElementById(doorID);
	door.setAttribute("isLocked", 'false');
}

/*---------- Action Specific -----------*/
function startEvent(){
	var startSpeech = [
		">Emergency announcement: Unavoidable power loss detected in 2 additional fission reactors.",
		">Beginning emergency shutdowns of habitation areas G to I.",
		">Next unavoidable shutdown estimated to occur in approximately 3 days.",
		">Total life support failure expected in 19 days.",
		">Updating estimate of complete system shutdown.",
		">New calculation: 24 days and 13 hours.",
		">Beginning emergency resuscitation of effected personnel."
	]	
	var timesRun = 0;
	var audio = document.getElementById("alarm");
	var interval = setInterval(function(){
		audio.play();
		if(timesRun === startSpeech.length-1){
			clearInterval(interval);
		}
		updateLog(startSpeech[timesRun]);
		timesRun += 1;
	}, 4300); 
}

function startOminous(){
	var audio = document.getElementById("darkness");
	audio.play();
}

function runScript(e){
	if (e.keyCode == 13) {
		var input = document.getElementById("consoleInput").value;
		var shortInput = input.substring(2,length.input);
		document.getElementById('consoleInput').value = '> '
        updateLog(shortInput);
    }
}


