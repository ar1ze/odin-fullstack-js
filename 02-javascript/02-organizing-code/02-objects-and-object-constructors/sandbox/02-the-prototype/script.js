// Object constructors
function Player(name, marker) {
  this.name = name;
  this.marker = marker;

  this.sayName = function() {
    console.log(this.name);
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'

// The prototype 
const prototype1 = Object.getPrototypeOf(player1);
console.log(prototype1);
console.log(prototype1 === Player.prototype);

Player.prototype.sayHello = function() {
   console.log("Hello, I'm a player!");
};

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"'

const player1ValueOf = player1.valueOf();
console.log(player1ValueOf);
console.log(Object.prototype)