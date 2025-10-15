const log = console.log;
const header = log;
const newLine = '\n';

// Getters and setters
header('Getters and setters');
let user = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },
};

user.fullName = 'Alice Cooper';
log(user.name);
log(user.surname);
log(newLine);

// Accessor descriptors
header('Accessor descriptors');
let miscrit = {
  name: 'Wolly',
  surname: 'Legend',
};

Object.defineProperty(miscrit, 'FullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(' ');
  },
});

log(user.fullName);
for (let key in user) log(key);

log(miscrit);
log(newLine);

// Smart getters/setters
header('Smarter getters/setters');
let player = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      log('Name is too short, need to at least 4 characters');
      return;
    }
    this._name = value;
  },
};

player.name = 'Pete';
log(player.name);
player.name = '';
log(newLine);

// Using for compatibility
header('Using for compatibility');

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, 'age', {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}

let chloe = new User('Chloe', new Date(1992, 6, 1));
log(chloe.birthday);
log(chloe.age);
