


setInterval(mainLoop, 10); /* The game tick speed. */

function mainLoop(){	/* Major game loop logic goes in here */
	checkDisplay();
}

function updateLog(txt) {
	var ul = document.getElementById("logList");
	var li = document.createElement("li");
	if (txt.charAt(0) == ">"){
		li.setAttribute("class", "announcement");
		txt = (txt.substring(1,txt.length));
	} else if (txt.charAt(0) == "~") {
		li.setAttribute("class", "assistant");
		txt = (txt.substring(1,txt.length));
	} else if (txt.charAt(0) == "#") {
		li.setAttribute("class", "effect");
		txt = (txt.substring(1,txt.length));
	} else if (txt.charAt(0) == "?") {
		li.setAttribute("class", "speaker");
		txt = (txt.substring(1,txt.length));
	} else {
		li.setAttribute("class", "logEntry");
	}
	li.appendChild(document.createTextNode(txt));
	li.setAttribute("timeCreated", getCreationTime());
	li.setAttribute("opacity", 1);
	ul.insertBefore(li, ul.childNodes[0]);
}


function changeView(roomName) {
	var nextRoom = document.getElementById(roomName);
	if (nextRoom.getAttribute("lifeSupport") == "false"){
		updateLog("There's no air out there. Maybe I can find a way to pump some in.");
	} else {
		var mvps = document.getElementsByClassName("mainPanelView");
		var conts = document.getElementsByClassName("tabButtons");
		var relConts = nextRoom.getAttribute("relatedCont");
		var newConts = document.getElementById(relConts);
		for (i = 0; i < mvps.length; i++) {
			mvps[i].setAttribute("isVisible", 'false');
		}
		for (j = 0; j < conts.length; j++) {
			conts[j].style.backgroundColor = "grey";
		}
		
		document.getElementById("consoleDisplay").style.display = "none";
		document.getElementById("consoleInput").style.display = "none";
		document.getElementById("consoleTitle").style.display = "none";
		
		newConts.style.backgroundColor = "black";
		nextRoom.setAttribute("isVisible", 'true');
		checkDisplay();
	}
}

function getCreationTime(){
	var d = new Date();
	return (d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' 
	+ d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
}

function buttonDisable(buttonId, t){
	var timesRun = 0;
	var buttonPressed = document.getElementById(buttonId);
	buttonPressed.classList.remove("actionButton");
	buttonPressed.classList.add("actionButtonOff");
	var interval = setInterval(function(){
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
	
	actionButs = document.getElementsByClassName("actionButton");
	for (i = 0; i < actionButs.length; i++) {
		if (actionButs[i].getAttribute("isVisible") == 'false'){
			actionButs[i].style.display = "none";
		} else {
			actionButs[i].style.display = "block";
		}
	}
	
	rCs = document.getElementsByClassName("resourceCounter");
	for (i = 0; i < rCs.length; i++) {
		if (rCs[i].getAttribute("isVisible") == 'false'){
			rCs[i].style.display = "none";
		} else {
			rCs[i].style.display = "block";
		}
	}
}

function createBuyButton(obj){
	var Craftables = {
		'Chisel': {
			name: ('Chisel'),
			availableMsg: ("Found a broken bit of pipe in the crawlspace. Might be able to find a use for it."),
			buildMsg: ('Fashioned myself a little chisel. Might be able to get through the wall now.'),
			buyBar: "roomBuyBar",
			type: '',
			cost: function() {
				return {
					'metal': 1,
					'cloth': 1
				};
			}
		},
		
		'Repair Console': {
			name: ('Repair Console'),
			availableMsg: ("This old console is beat up bad. I need some wires to fix it up."),
			buildMsg: ('Engineer wired the thing back together. Time to try turning it on.'),
			buyBar: "darkBuyBar",
			type: '',
			cost: function() {
				return {
					'electronics': 3
				};
			}
		}
}
	
	var ul = document.getElementById("darkBuyBar");
	var newBB = document.createElement('li'); 
	newDiv.classList.add('actionButton');
	var refObj = Craftables[obj];
	var newid = (refObj.name+'BB');
	newDiv.setAttribute("id", "newid");
	newDiv.setAttribute("isVisible", "true");
	newDiv.setAttribute("onclick", "attemptBuy('chiselBB')");
	ul.append(li);
	updateLog("Done process");
}

/*
<script>
$('#alarmAB').click(testfunction());
</script>
function test(){  $( "#alarmAB" ).clone().appendTo( "#darkRoomAB" ); }
*/
