const log = console.log;
const header = log;
const newLine = '\n';

//
header('Class syntax');
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    log(this.name);
  }
}

let kim = new User('Chaeyeon');
kim.sayHi();
log(new User());
log(newLine);

//
header('Class Expression');
let Player = class MyClass {
  sayHi() {
    log(MyClass);
  }
};
new Player().sayHi();
log(newLine);

//
header('Getters/setters');
class Human {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      log('Name is too short.');
      return;
    }
    this._name = value;
  }
}

let human = new Human('Sung');
log(human.name);
log(newLine);

//
header('Computed names');
class ComputedUser {
  ['say' + 'Hi']() {
    log('Hello');
  }
}

new ComputedUser().sayHi();
log(newLine);

//
header('Class fields');
class FieldUser {
  name = 'Field';
  sayHi() {
    log(`Hello, ${this.name}!`);
  }
}
let fieldUser = new FieldUser();
log(fieldUser.name);
log(FieldUser.prototype.name);
log(newLine);

//
header('Making bound methods with class fields');
class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    log(this.value);
  }
  clickWrapper = () => {
    log(this.value);
  };
}
let button = new Button('hello');
setTimeout(button.click, 1000);
setTimeout(button.clickWrapper, 1000);
