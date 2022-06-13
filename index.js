const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const appendCat = [...cats, "Broom"];
    return appendCat;
}

function prependCat(name) {
    const prependCat = ["Arnold", ...cats];
    return prependCat;
}

function removeLastCat(name) {
    return cats.slice(0, 2);
}

function removeFirstCat(name) {
    return cats.slice(1);
}