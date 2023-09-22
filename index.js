let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
};
function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats;
};
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
};
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
};
function appendCat(name) {
    appendCat = [...cats, (name)];
    return appendCat;
};
function prependCat(name){
    prependCat = [name, ...cats];
    return prependCat;
};
function removeLastCat(name){
    const removeLastCat = [...cats];
    removeLastCat.pop();
    return removeLastCat;
};
function removeFirstCat(){
    const removeFirstCat = [...cats]
    removeFirstCat.shift();
    return removeFirstCat;
}