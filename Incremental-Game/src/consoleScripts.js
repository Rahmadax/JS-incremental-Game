function updateConsole(txt) {
	var console = document.getElementById("consoleDisplay");
	console.innerHTML = "Testing";
	for (i = 0; i < txt.length; i++) {
	} 
}

function runScript(e){
	if (e.keyCode == 13) {
		var input = document.getElementById("consoleInput").value.toUpperCase();
		if (input.substring(0,1) == ">"){
			var shortInput = input.substring(1,length.input);
		} else {
			var shortInput = input;
		}
		document.getElementById('consoleInput').value = '>'
		processInput(shortInput);
    }
}


function processInput(input){
	var cDisp = document.getElementById("consoleDisplay");
	cDisp.innerHTML = "";
	if (input.substring(0,4) == "HELP") {
		cDisp.innerHTML = "More information, type: <BR/><BR/> doorcommands<BR/><BR/>lifesupport <BR/><BR/> status";
	} else if (input.substring(0,6) == "UNLOCK"){
		if (/^[A-Z]{1}[-]{1}\d{3}[-]{1}.{2}$/g.test(input.substring(7,input.length))) {
			updateLog("#The  clamps on the door slide open.");
			unlockDoor(input.substring(7, 15)+"a");
			unlockDoor(input.substring(7, 15)+"b");
			var audio = document.getElementById("unlock");
			audio.play();
		} else {
			updateLog("# Unknown door");
		}
	} else if (input.substring(0,4) == "PUMP"){
		if (/^[A-Z]{1}[-]{1}\d{3}$/g.test(input.substring(5,input.length))) {
			updateLog("?Pumping Oxygen to sector " + input.substring(5,input.length));
		} else {
			updateLog("? Unknown Sector");
		}
	} else if (input.substring(0,4) == "VENT"){
		if (/^[A-Z]{1}[-]{1}(\d\d\d){1}$/g.test(input.substring(5,input.length))) {
			updateLog("?Venting Oxygen from sector " + input.substring(5,input.length));
		} else {
			updateLog("? Unknown Sector");
		}
	} else if (input.substring(0,11) == "LIFESUPPORT"){
		cDisp.innerHTML = "Pump in oxygen: Pump SectorCode (Pump A-123) <BR/><BR/> Vent out oxygen: Vent SectorCode (Vent A-123)";
	} else if (input.substring(0,11) == "STATUS"){
		cDisp.innerHTML = "Oxygen level: Unknown.<BR/><BR/>Power level: Unknown<BR/><BR/>Surviving Residents: Unknown.";
	}
	
}

function activateCosnole(consoleID){
	var console = document.getElementById(consoleID);
	var cTi = document.getElementById("consoleTitle");
	var cDisp = document.getElementById("consoleDisplay");
	var cInp = document.getElementById("consoleInput");
	cInp.value = '>'
	cTi.innerHTML = "Console " + consoleID.substring(0,consoleID.length-1) +".";
	cTi.style.display = "block";
	cInp.style.display = "block";
	cDisp.style.display = "block";
	var audio = document.getElementById("powerOn");
	audio.play();
}

function deactivateConsole(){
	cTi = document.getElementById("consoleTitle")
	cTi.style.display = "none";
	cTi.innerHTML = "";
	document.getElementById("consoleInput").style.display = "none";
	document.getElementById("consoleDisplay").style.display = "none";
}

function repairConsole(consoleID, buttonID){
	buttonDisablePerm(buttonID);
	if (consoleID == "C-H120"){
		document.getElementById("C-H120Search").setAttribute("isVisible", "false");
		document.getElementById("C-H120a").setAttribute("isVisible", "true");
		document.getElementById("C-H120d").setAttribute("isVisible", "true");
	}
}