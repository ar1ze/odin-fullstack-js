const log = console.log;
const header = log;
const newLine = '\n';

// Getters and setters
header('Person Class With Details');
class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayDetails() {
    log(`Name: ${this.name}`);
    log(`Age: ${this.age}`);
    log(`Country: ${this.country}`);
  }
}

const kim = new Person('Kim Chaeyeon', '25', 'Korea');
const jungkook = new Person('Jungkook', '28', 'Korea');

kim.displayDetails();
log(newLine);
jungkook.displayDetails();
