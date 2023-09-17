const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (name) {
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const appendCat = [...cats, (name)];
    return appendCat;
}
function prependCat(name) {
    prependCat = [(name), ...cats];
    return prependCat;
}
function removeLastCat() { 
    const removeLastCat = [...cats];
    removeLastCat.pop();
    return removeLastCat;
}
function removeFirstCat() {
    const removeFirstCat = [...cats];
    removeFirstCat.shift();
    return removeFirstCat;
}