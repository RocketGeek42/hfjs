function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}
var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1965,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
};

var worthALook = prequal(taxi);

if (worthALook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}

var car = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
  };

var worthALook = prequal(car);

if (worthALook) {
    console.log("You gotta check out this " + car.make + " " + car.model);
} else {
    console.log("You should really pass on the " + car.make + " " + car.model);
}

var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
  };

var worthALook = prequal(cadi);

if (worthALook) {
    console.log("You gotta check out this " + cadi.make + " " + cadi.model);
} else {
    console.log("You should really pass on the " + cadi.make + " " + cadi.model);
}

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
  };

var worthALook = prequal(fiat);

if (worthALook) {
    console.log("You gotta check out this " + fiat.make + " " + fiat.model);
} else {
    console.log("You should really pass on the " + fiat.make + " " + fiat.model);
}