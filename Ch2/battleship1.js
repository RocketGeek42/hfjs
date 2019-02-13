var random_loc = Math.floor(Math.random() * 5);
var location_1 = random_loc;
var location_2 = location_1 + 1;
var location_3 = location_2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var is_sunk = false;

while (is_sunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number");
  } else {
    guesses = guesses + 1;
  }
  if (guess == location_1 || guess == location_2 || guess == location_3) {
    alert("HIT!");
    hits = hits + 1;

    if (hits == 3) {
      is_sunk = true;
      alert("You sank my battleship!");
    }
  }else {
    alert("MISS");
  }

}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " +(3 / guesses);
alert(stats);
