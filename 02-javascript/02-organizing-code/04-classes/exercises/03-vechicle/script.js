const log = console.log;
const header = log;
const newLine = '\n';

// Getters and setters
header('Vehicle and Car');
class Vechicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayDetails() {
    log(`Vehicle Make: ${this.make}`);
    log(`Vehicle Model: ${this.model}`);
    log(`Vehicle Year: ${this.year}`);
  }
}

class Car extends Vechicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }
  displayDetails() {
    super.displayDetails();
    log(`Car Doors: ${this.doors}`);
  }
}
const mercedes = new Vechicle('Mercedes', 'SL200', 2025);
log('Vehicle Details:');
mercedes.displayDetails();
log(newLine);

const car = new Car('Honda', 'Accord', 2024, 4);
log('Car Details:');
car.displayDetails();
