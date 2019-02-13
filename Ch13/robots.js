function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}
Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.speak = function() {
    alert("Danger Will Robinson! Danger!")
}
Robot.prototype.makeCoffee = function() {
    alert("Turning on Keurig");
}
Robot.prototype.cleanHouse = function() {
    alert("Cleaning house");
}
Robot.prototype.blinkLights = function() {
    alert("blink blink blink");
}
Robot.prototype.errorMessage = "All systems go.";
Robot.prototype.reportError = function() {
    console.log(this.name + " says " + this.errorMessage);
};
Robot.prototype.spillWater = function() {
    this.errorMessage = "I appear to have a short circuit!";
};
Robot.prototype.toString = function() {
    return this.name + " Robot belonging to " + this.owner;
};

var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");
var toy = new Robot("Toy", 2013, "Avary");


robby.onOffSwitch = true;
robby.maker;
rosie.cleanHouse();

console.log(robby.name + " was made by " + robby.maker + " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();
console.log(rosie.name + " was made by " + rosie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();
rosie.reportError();
robby.reportError();
robby.spillWater();
rosie.reportError();
robby.reportError();
console.log(robby.hasOwnProperty("errorMessage"));
console.log(rosie.hasOwnProperty("errorMessage"));