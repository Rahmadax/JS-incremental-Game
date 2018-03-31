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

// Parses and computes the input into the console input line.
function processInput(input){
    let cDisp = document.getElementById("consoleDisplay");
    cDisp.innerHTML = "";
    if (input.substring(0,4) === "HELP") {
        cDisp.innerHTML = "More information, type: <BR/><BR/>'Doorcommands'<BR/><BR/>'Lifesupport'<BR/><BR/> 'Information'";
    } else if (input.substring(0,6) === "UNLOCK"){
        if (/^[A-Z]{1}[-]{1}\d{3}[-]{1}.{2}$/g.test(input.substring(7,input.length))) {
            updateLog("#The  clamps on the door slide open.");
            unlockDoor(input.substring(7, 15)+"a");
            unlockDoor(input.substring(7, 15)+"b");
            let audio = document.getElementById("unlock");
            audio.play();
        } else {
            updateLog("> Unknown door");
        }
    } else if (input.substring(0,4) === "LOCK"){
        if (/^[A-Z]{1}[-]{1}\d{3}[-]{1}.{2}$/g.test(input.substring(5,input.length))) {
            updateLog("#The  clamps on the door slide shut.");
            lockDoor(input.substring(5, 13)+"a");
            lockDoor(input.substring(5, 13)+"b");
            let audio = document.getElementById("unlock");
            audio.play();
        } else {
            updateLog("> Unknown door");
        }
    } else if (input.substring(0,6) === "STATUS"){
        if (/^[A-Z]{1}[-]{1}\d{3}[-]{1}.{2}$/g.test(input.substring(7,input.length))) {
            let doorCode = document.getElementById(input.substring(7,input.length)+"a");
            alert(doorCode.getAttribute("isLocked"));
            if((doorCode).getAttribute("isLocked") === "true"){
                updateLog("?Door is locked");
            } else {
                updateLog("?Door is unlocked");
            }
        } else {
            updateLog("? Unknown command");
        }
    } else if (input.substring(0,4) === "PUMP"){
        if (/^[A-Z]{1}[-]{1}\d{3}$/g.test(input.substring(5,input.length))) {
            updateLog("?Pumping Oxygen to sector " + input.substring(5,input.length));
        } else {
            updateLog("? Unknown Sector");
        }
    } else if (input.substring(0,4) === "VENT"){
        if (/^[A-Z]{1}[-]{1}(\d\d\d){1}$/g.test(input.substring(5,input.length))) {
            updateLog("?Venting Oxygen from sector " + input.substring(5,input.length));
        } else {
            updateLog("? Unknown Sector");
        }
    } else if (input.substring(0,11) === "LIFESUPPORT"){
        cDisp.innerHTML = "Pump in oxygen: Pump SectorCode (Pump A-123) <BR/><BR/> Vent out oxygen: Vent SectorCode (Vent A-123)<BR/><BR/>Sector Status: Status Sectorcode (Status A-123)";
    } else if (input.substring(0,11) === "INFORMATION"){
        cDisp.innerHTML = "Oxygen level: Unknown.<BR/><BR/>Power level: Unknown<BR/><BR/>Surviving Residents: Unknown.";
    } else if (input.substring(0,12) === "DOORCOMMANDS") {
        cDisp.innerHTML = "Unlock door: Unlock doorcode (Unlock A-123-01)<BR/><BR/>Lock door: Lock doorcode (Lock A-123-01)<BR/><BR/>Door Status: Status doorcode (Status A-123-01)";
    }
}