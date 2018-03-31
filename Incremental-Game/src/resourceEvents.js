// Updating the resource data table. Takes the table key and the value to add.
function updateResources(resourceType, addition){
    let res = document.getElementById(resourceType);
	let currRes = resources[resourceType];
	let newValue = (currRes+addition);
    resources[resourceType] = newValue;
	res.innerHTML = (resourceType + ": " + newValue.toString());
	updateResourceView();
}

// Updates the resource view displays.
function updateResourceView(){
    let resourceKeys = Object.keys(resources);
    for (let i = 0; i < resources.length; i++){
        if (resources[i] === 0){
            let li = document.getElementById(resourceKeys[i]);
            if (li != null){
                $(li).remove();
            }
        }
    }
}

// Attempts to buy an item. Takes an Item table key.
function attemptBuy(item){
    let itemRef = items[item];
    let keys = Object.keys(itemRef.cost);
    let costs = Object.values(itemRef.cost);
    let success;
    for (let i = 0; i < costs.length; i++) {
        if (costs[i] <= resources[keys[i]]) {
            success = true;
        } else {
            success = false;
            updateLog("Don't have the resources.");
            break; // If any resources is lacking, break from loop.
        }
    }
    if (success === true) {
        for (let j = 0; j < costs.length; j++)
            resources[keys[j]] -= costs[j];

        updateLog(itemRef.buildMsg);
        document.getElementById(itemRef.name + "BB").removeAttribute('class');
        document.getElementById(itemRef.name + "BB").setAttribute('class', 'actionButtonOff');
        document.getElementById(itemRef.name + "BB").removeAttribute('onClick');
        document.getElementById(itemRef.name + "TT").style.display = 'none';
        itemRef.available = false;
    }
}
