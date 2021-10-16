let counterEl = document.getElementById("counter");
let counterContainerEl = document.getElementById("counterContainer");
let startButtonEl = document.getElementById("startButton");
let endButtonEl = document.getElementById("endButton");
let resetButtonEl = document.getElementById("resetButton");

let counter = 0;
let uniqueId;

startButtonEl.addEventListener("click",function(){
    uniqueId = setInterval(() => {
        counter = counter +1;
        counterEl.textContent = counter;
    },1000);
    startButtonEl.classList.add("start-button-display");
    counterContainerEl.classList.add("counter-container-start");
    endButtonEl.classList.remove("end-button-display");
});

endButtonEl.addEventListener("click", function(){
    clearInterval(uniqueId);
    startButtonEl.classList.remove("start-button-display");
    counterContainerEl.classList.remove("counter-container-start");
    endButtonEl.classList.add("end-button-display");
});

resetButtonEl.addEventListener("click", function(){
    clearInterval(uniqueId);
    counter = 0;
    counterEl.textContent = counter;
    startButtonEl.classList.remove("start-button-display");
    counterContainerEl.classList.remove("counter-container-start");
    endButtonEl.classList.add("end-button-display");

});