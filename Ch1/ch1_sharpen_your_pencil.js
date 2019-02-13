var price = 28.99; //create a variable name price and assign 28.99 to it
var discount = 10; // create a variable named discount and assign 10 to it
var total =
  price - (price * (discount / 1000)); //Create a variable named total - value is computed by applying the discount to the price
if (total > 25) { //if the variable total is greater than 25
  freeShipping(); //then shipping is free
} //end the statement

var count = 10; //create a variable count and assign 10 to it.
while (count > 0) { //as long as the variable count is greater than 0
  juggle(); //call the juggle function
  count = count - 1; //and reduce the count by 1
} //end the statement

var dog = {name: "Rover", weight: 35}; //create a dog with name and weight
if (dog.weight > 30) { //if the dog's weight is greater than 30
  alert("WOOF WOOF"); //have this alert in the browsers web page
} else { //otherwise
  alert("woof woof"); //have this alert in the browsers web page
}

var circleRadius = 20; //create a variable circleRadius and assign 20 to it
var circleArea =
  Math.PI * (circleRadius * circleRadius); //create a variable named circleArea and assign it the result of the expression.
