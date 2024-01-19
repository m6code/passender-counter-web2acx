console.log("Helloworks");

const counter = document.getElementById("counter");
const decrementButton = document.getElementById("btn-dec");
const incrementButton = document.getElementById("btn-inc");
const saveButton = document.getElementById("btn-sav");
const toggleButton = document.getElementById("toggle-theme");
const previousEntriesSpan = document.getElementById("previous-entries");


let count = 0;
let prevEntries = "";
function increment() {
    count++;
    updateCount();
}

function decrement() {
    if(count >= 1) {
        count--;
    }
    updateCount();
}

function save() {
    prevEntries =  prevEntries  + " - " + count;
    updatePrevEntries();
    resetCount();
}

function updateCount() {
    counter.textContent = count;
    checkDecrementButton();
}

function updatePrevEntries() {
    previousEntriesSpan.innerText = prevEntries;
}

function enableButton(buttonEl) {
    buttonEl.disabled = false;
}

function disableButton(buttonEl) {
    buttonEl.disabled = true;
}

function resetCount() {
    count = 0;
    updateCount()
}

function checkDecrementButton() {
    if(count === 0) disableButton(decrementButton);
    else enableButton(decrementButton);
}
