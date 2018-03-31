function updateResources(resourceType, addition){
    let res = document.getElementById(resourceType);
	let currRes = resources[resourceType];
	let newValue = (currRes+addition);
    resources[resourceType] = newValue;
	res.innerHTML = (resourceType + ": " + newValue.toString());
	updateResourceView();
}

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

function createBuyButton(obj){
    let objRef = items[obj];
    if (objRef.available === 'true'){
        let ul = document.getElementById(objRef.buyBar);
        let newBuy = document.createElement('li');
        let newBuytext = document.createElement('p');
        let newBuyTT = document.createElement('span');
        let keys = Object.keys(objRef.cost);
        let costs = Object.values(objRef.cost);

        newBuyTT.setAttribute('class', 'tooltiptext');
        newBuyTT.setAttribute('id', (objRef.name + 'TT'));
        newBuyTT.innerHTML = '';
        for (let i = 0; i < costs.length; i++){
            newBuyTT.innerHTML += (costs[i] + ' ' + keys[i] +"  ");
        }
        newBuytext.innerHTML = objRef.name;
        newBuy.setAttribute('class', 'actionButton');
        newBuy.setAttribute('id', (objRef.name + 'BB'));
        newBuy.setAttribute('onClick', 'attemptBuy("'+ objRef.name +'")');

        ul.appendChild(newBuy);
        newBuy.append(newBuytext);
        newBuytext.append(newBuyTT);

        objRef.available = 'false';
    }
}


function attemptBuy(obj){
    let objRef = Items[obj];
    let keys = Object.keys(objRef.cost);
    let costs = Object.values(objRef.cost);
    let succ;
    for (let i = 0; i < costs.length; i++) {
        if (costs[i] <= resources[keys[i]]) {
            succ = true;
        } else {
            succ = false;
            break;
        }
    }
    for (let j = 0; j < costs.length; j++){
        resources[keys[j]] -= costs[j];
    }

    document.getElementById(objRef.name+"BB").removeAttribute('class');
    document.getElementById(objRef.name+"BB").setAttribute('class', 'actionButtonOff');
    document.getElementById(objRef.name+"BB").removeAttribute('onClick');
    document.getElementById(objRef.name+"TT").style.display = 'none';
    objRef.available = false;
}
