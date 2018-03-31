function updateResources(resourceType, addition){
    let res = document.getElementById(resourceType);
	let currRes = resources[resourceType];
	let newValue = (currRes+addition);
    resources[resourceType] = newValue;
	res.innerHTML = (resourceType + ": " + newValue.toString());
}


function testIS(txt){
    updateLog(Items[txt].availableMsg);
}


function createBuyButton(obj){
    let objRef = Items[obj];
    if (objRef.available === 'true'){
        let ul = document.getElementById(objRef.buyBar);
        let newBuy = document.createElement('li');
        let newBuytext = document.createElement('p');
        let newBuyTT = document.createElement('span');
        let keys = Object.keys(objRef.cost);
        let costs = Object.values(objRef.cost);

        newBuyTT.setAttribute('class', 'tooltiptext');
        newBuyTT.innerHTML = '';
        for (let i = 0; i < costs.length; i++){
            newBuyTT.innerHTML += (costs[i] + ' ' + keys[i] +"  ");
        }
        newBuytext.innerHTML = objRef.name;
        newBuy.setAttribute('class', 'actionButton');
        newBuy.setAttribute('onClick', 'attemptBuy("'+ objRef.name +'")');

        ul.appendChild(newBuy);
        newBuy.append(newBuytext);
        newBuytext.append(newBuyTT);

        objRef.available = 'false';
    }
}

/*
function attemptBuy(obj){
    let objRef = Items[obj];
    let keys = Object.keys(objRef.cost);
    let costs = Object.values(objRef.cost);
    let succ;
    for (let i = 0; i < costs.length; i++){
        let res = document.getElementById(keys[i]).innerHTML;
        if (costs[res] < parseFloat((res.substring(res.indexOf(' '),res.length)))){
            succ = true;
        } else {
            succ = false;
            break;
        }
    }

    if (succ === true){
        for (let j = 0; j < costs.length; j++){
            let res = document.getElementById(keys[j]).innerHTML;
            let currRes = parseFloat(res.split(' ')[1]);
            let newValue = ((currRes-costs[res]).toString());
            res.innerHTML = (resType + ": " + newValue);
        }
        updateLog("Got it.");
    } else {
        updateLog("Can't afford it.");
    }*/

