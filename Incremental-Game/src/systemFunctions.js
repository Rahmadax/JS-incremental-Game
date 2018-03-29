
function updateLog(txt) {
	var ul = document.getElementById("logList");
	var li = document.createElement("li");
	if (txt.charAt(0) == ">"){
		li.setAttribute("class", "announcement");
		txt = (txt.substring(1,txt.length));
	} else if (txt.charAt(0) == "~") {
		li.setAttribute("class", "assistant");
		txt = (txt.substring(1,txt.length));
	} else {
		li.setAttribute("class", "logEntry");
	}
	li.appendChild(document.createTextNode(txt));
	li.setAttribute("timeCreated", getCreationTime());
	li.setAttribute("opacity", 1);
	ul.insertBefore(li, ul.childNodes[0]);
}

function updateConsole(txt) {
	var console = document.getElementById("consoleDisplay");
	console.innerHTML = "Testing";
	for (i = 0; i < txt.length; i++) {
	} 
}

function changeView(roomName) {
	var nextRoom = document.getElementById(roomName);
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
	newConts.style.backgroundColor = "black";
    nextRoom.setAttribute("isVisible", 'true');
	checkDisplay();
}

function getCreationTime(){
	var d = new Date();
	return (d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' 
	+ d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
}






setInterval(mainLoop, 5);

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



