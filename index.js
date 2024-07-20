let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let clearEl = document.getElementById("clear-btn");
var count = 0;

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    resetCount();
}

function increment() {
    count += 1;
    countEl.textContent = count;
}

function clearEntries() {
    resetCount();
    saveEl.textContent = "Previous entries: ";
}

function resetCount() {
    count = 0;
    countEl.textContent = 0;
}


/*The issue with the clear function might be due to the fact that the clear function name is a reserved keyword in JavaScript. 
Renaming the function to something else like clearEntries should resolve the issue. */ 