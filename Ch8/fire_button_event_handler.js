function init() {
    var fireButton = document.getElementById("fireBotton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
    model.generateShipLocations();
}

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.nodeValue;
    controller.processGuess(guess);
    guessInput.value = "";
}

function handleKeyPress() {
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

window.onload = init;