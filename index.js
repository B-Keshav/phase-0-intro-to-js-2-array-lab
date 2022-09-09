// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
function beforeEach(){
    cats.splice(0);
    cats.push("Milo", "Otis", "Garfield");
};
function destructivelyAppendCat(name){
    beforeEach();
    cats.push(name);
}
function destructivelyPrependCat(name){
    beforeEach();
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    beforeEach();
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    beforeEach();
    cats.shift();
}
function appendCat(name){
    beforeEach();
    const newcats=[...cats, name];
    return newcats;
}
function prependCat(name){
    beforeEach();
    const newcats=[name, ...cats];
    return newcats;
}
function removeLastCat(){
    beforeEach();
    const newcats = cats.slice(0,-1);
    return newcats; 
}
function removeFirstCat(){
    beforeEach();
    const newcats = cats.slice(1, cats.length);
    return newcats;
}
