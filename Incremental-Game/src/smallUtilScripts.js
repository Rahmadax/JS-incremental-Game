function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function arrayContains(s, array)
{
    return (array.indexOf(s) > -1);
}

function longLen(arr1, arr2){
    if (arr1.length > arr2.length){
        return arr1.length;
    } else {
        return arr2.length;
    }
}