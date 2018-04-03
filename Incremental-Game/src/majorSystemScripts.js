
setInterval(mainLoop, 10); /* The game tick speed. */

function mainLoop(){	/* Major game loop logic goes in here */
	checkDisplay();
}

function updateLog(txt) {
	let ul = document.getElementById("logList");
	let li = document.createElement("li");
	if (txt.charAt(0) === ">"){
		li.setAttribute("class", "announcement");
		txt = (txt.substring(1,txt.length));
	} else if (txt.charAt(0) === "~") {
		li.setAttribute("class", "assistant");
		txt = (txt.substring(1,txt.length));
	} else if (txt.charAt(0) === "#") {
		li.setAttribute("class", "effect");
		txt = (txt.substring(1,txt.length));
	} else if (txt.charAt(0) === "?") {
		li.setAttribute("class", "speaker");
		txt = (txt.substring(1,txt.length));
	} else {
		li.setAttribute("class", "logEntry");
	}
	li.appendChild(document.createTextNode(txt));
	li.setAttribute("timeCreated", getCreationTime());
	li.setAttribute("opacity", "1");
	ul.insertBefore(li, ul.childNodes[0]);
	fullLog.push(txt);
}

function openDoor(doorID) {
    let door = document.getElementById(doorID+'C') ;
    if (door.getAttribute("islocked") === 'true') {
        updateLog("Door's heavy. Wont budge. " + "The code " + doorID + " is printed just above the door.");
    } else {
        changeView(doorID);
        checkDisplay();
    }
}

function changeView(conRoom) {
	let nextRoom = document.getElementById(conRoom);
	let mvps = document.getElementsByClassName("mainPanelView");
	for (let i = 0; i < mvps.length; i++) {
		mvps[i].setAttribute("isVisible", 'false');
	}
	nextRoom.setAttribute("isVisible", 'true');
	checkDisplay();
}

function getCreationTime(){
	let d = new Date();
	return (d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' 
	+ d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
}

function buttonDisable(buttonId, t){
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
	
	checkDisplay();
}

function buttonDisablePerm(buttonId){
	var buttonPressed = document.getElementById(buttonId);
	buttonPressed.setAttribute("onclick", "");
	buttonPressed.classList.remove("actionButton");
	buttonPressed.classList.add("actionButtonOff");
}

function checkDisplay(){
	mvps = document.getElementsByClassName("mainPanelView");
	for (i = 0; i < mvps.length; i++) {
		if (mvps[i].getAttribute("isVisible") === 'false'){
			mvps[i].style.display = "none";
		} else {
			mvps[i].style.display = "block";
		}
	}
	
	tabConts = document.getElementsByClassName("tabButtons");
	for (i = 0; i < tabConts.length; i++) {
		if (tabConts[i].getAttribute("isVisible") === 'false'){
			tabConts[i].style.display = "none";
		} else {
			tabConts[i].style.display = "block";
		}
	}
	
	actionButs = document.getElementsByClassName("actionButton");
	for (i = 0; i < actionButs.length; i++) {
		if (actionButs[i].getAttribute("isVisible") === 'false'){
			actionButs[i].style.display = "none";
		} else {
			actionButs[i].style.display = "block";
		}
	}
	
	rCs = document.getElementsByClassName("resourceCounter");
	for (i = 0; i < rCs.length; i++) {
		if (rCs[i].getAttribute("isVisible") === 'false'){
			rCs[i].style.display = "none";
		} else {
			rCs[i].style.display = "block";
		}
	}
}
/*
<script>
$('#alarmAB').click(testfunction());
</script>
function test(){  $( "#alarmAB" ).clone().appendTo( "#darkRoomAB" ); }
*/
