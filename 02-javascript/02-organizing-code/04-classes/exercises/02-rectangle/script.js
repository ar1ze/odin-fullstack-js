const log = console.log;
const header = log;
const newLine = '\n';

// Getters and setters
header('Rectangle Class');
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
  calcuatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(12, 10);

const area = rectangle.calculateArea();
const perimeter = rectangle.calcuatePerimeter();

log(`Rectangle Area: ${area}`);
log(`Rectangle Perimeter: ${perimeter}`);
