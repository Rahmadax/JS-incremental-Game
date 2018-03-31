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

// Creates new buy buttons and updates the item table. Takes the Item table key.
function createBuyButton(item){
    let itemRef = items[item];
    if (itemRef.available === 'true'){
        let ul = document.getElementById(itemRef.buyBar);
        let newBuy = document.createElement('li');     // Create a new list item
        let newBuytext = document.createElement('p');  // P tag inside the list item
        let newBuyTT = document.createElement('span'); // Create the new Tool tip
        let keys = Object.keys(itemRef.cost);
        let costs = Object.values(itemRef.cost);

        newBuyTT.setAttribute('class', 'tooltiptext');
        newBuyTT.setAttribute('id', (itemRef.name + 'TT'));
        newBuyTT.innerHTML = '';
        for (let i = 0; i < costs.length; i++)
            newBuyTT.innerHTML += (costs[i] + ' ' + keys[i] +"  ");

        newBuytext.innerHTML = itemRef.name.replace("_", " ");
        newBuy.setAttribute('class', 'actionButton');
        newBuy.setAttribute('id', (itemRef.name + 'BB'));
        if (itemRef.extraFunction != null){
            newBuy.setAttribute('onClick', "attemptBuy("+ "'" +itemRef.name + "'); " + itemRef.extraFunction);
        } else {
            newBuy.setAttribute('onClick', 'attemptBuy("'+ itemRef.name +'")');
        }


        ul.appendChild(newBuy);
        newBuy.append(newBuytext);
        newBuytext.append(newBuyTT);

        itemRef.available = 'false';                   // Stops object being created twice.
        updateLog(itemRef.availableMsg);
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
