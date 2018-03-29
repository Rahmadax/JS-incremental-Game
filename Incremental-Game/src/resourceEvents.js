function updateResources(resourceType, addition){
	var res = document.getElementById(resourceType);
	var editRes = res.innerHTML;
	var currRes = parseFloat(editRes.split(' ')[1]);
	var resType = editRes.substr(0, editRes.indexOf(':'));
	var newValue = ((currRes+addition).toString());
	res.innerHTML = (resType + ": " + newValue);
}
	
function attemptBuy(bPressed, bTT){
	activeButton = document.getElementById(bPressed);
	updateLog(materials.length.toString());
	
}

function parseBuy(bTT){
	var materials = document.getElementById(bTT).innerHTML;
	updateLog("Original: " + materials);
	var indicies = [];
	for(i = 0; i < materials.length; i++){
		if (materials.charAt(i) == " "){
			indicies.push(i);
			/*updateLog(i.toString());*/
		}
	}

	var matList;
	updateLog(materials.substr(0, materials.indexOf(' ')));
	updateLog(materials.substr(indicies[0],(indicies[1])));
	var len = indicies.length;
	updateLog(materials.substr(indicies[len], materials.length));
	
	for (j = 1; j < (indicies.length+1/2); j+=1){
	}
	
}







