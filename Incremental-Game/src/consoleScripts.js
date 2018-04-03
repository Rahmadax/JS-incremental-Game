let consoleUpdating = false;

// Updates the console screen when given a string input.
function updateConsole(txt){
    if (!consoleUpdating) { // is the console already updating? If yes, don't run command.
        consoleUpdating = true; // set exterior flag to true. The console is updating.
        let timesRun = 0;
        let console = document.getElementById("consoleDisplay");
        console.innerHTML = "";
        let interval = setInterval(function () {  // Loops for each letter in txt input.
            if (timesRun === txt.length - 1) {
                clearInterval(interval);
                consoleUpdating = false;
            }
            let oldTxt = console.innerHTML;
            console.innerHTML = oldTxt + txt[timesRun];
            timesRun += 1;
        }, 10);
    }
}

// Runs when an input is given to the console input line.
function runScript(e){
    let shortInput;
	if (e.keyCode === 13) {
		let input = document.getElementById("consoleInput").value.toUpperCase();
		if (input.substring(0,1) === ">"){
			shortInput = input.substring(1,length.input);
		} else {
			shortInput = input;
		}
		document.getElementById('consoleInput').value = '>';
		processInput(shortInput.trim());
    }
}

// Turns the console display on.
function activateConsole(consoleID){
    if (consoles[consoleID.substring(0,consoleID.length-1)].repaired === true) {
        updateLog("The console buzzes to life.");
        let cTi = document.getElementById("consoleTitle");
        let cDisp = document.getElementById("consoleDisplay");
        let cInp = document.getElementById("consoleInput");
        cDisp.innerHTML = 'Enter Commands or type help for more information.';
        cInp.value = '>';
        cTi.innerHTML = "Console " + consoleID.substring(0, consoleID.length - 1) + ".";
        cTi.style.display = "block";
        cInp.style.display = "block";
        cDisp.style.display = "block";
        let audio = document.getElementById("powerOn");
        audio.play();
    } else {
        updateLog("The console is dead.");
    }
}

// Turns the console off.
function deactivateConsole(){
	cTi = document.getElementById("consoleTitle");
	cTi.style.display = "none";
	cTi.innerHTML = "";
	document.getElementById("consoleInput").style.display = "none";
	document.getElementById("consoleDisplay").style.display = "none";
}

// Repairs the console
function repairConsole(buttonID){

	buttonDisablePerm(buttonID);
}
