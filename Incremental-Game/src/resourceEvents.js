function updateResources(resourceType, addition){
    let res = document.getElementById(resourceType).innerHTML;
	let currRes = parseFloat(res.split(' ')[1]);
	let resType = res.substr(0, res.indexOf(':'));
	let newValue = ((currRes+addition).toString());
	res.innerHTML = (resType + ": " + newValue);
}


function testIS(txt){
    updateLog(Items[txt].availableMsg);
}


function createBuyButton(obj){
    let objRef = Items[obj];
    let ul = document.getElementById(objRef.buyBar);
    let newBuy = document.createElement("li");
    let newBuytext = document.createElement("p");
    let newBuyTT = document.createElement("span");
    let keys = Object.keys(objRef.cost);
    let costs = Object.values(objRef.cost);

    newBuyTT.setAttribute("class", "tooltiptext");
    newBuyTT.innerHTML = "";
    for (let i = 0; i < costs.length; i++){
        newBuyTT.innerHTML += (costs[i] + " " + keys[i] +"  ");
    }
    newBuytext.innerHTML = objRef.name;
    newBuy.setAttribute('class', 'actionButton');

    ul.appendChild(newBuy);
    newBuy.append(newBuytext);
    newBuytext.append(newBuyTT);
}