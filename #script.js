#script.js
/* Class on Wednesday 1/6 - jsBasics */



// Creating a Timer to be displayed on the screen
var currentCount =10;
function updateDisplay(display) {
    document.querySelector('#display').textContent
}


function timer (){
    current count --;
    updateDisplay(currentCount);
    if currentCount == 0) {
        clearInterval(interval);
    }
}



// For a timed quiz
// May want to set a timeout (T.O) then when the timer ends, stop the timeout and move to the next page immediately