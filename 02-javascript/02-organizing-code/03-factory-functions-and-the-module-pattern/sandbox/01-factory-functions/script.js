// Facotry function
function createUser (name) { 
  const discordName = '@' + name;
  return {name, discordName};
}

const user = createUser('Ar1ze');
console.log(user);

// Destructuring
const obj = {a: 1, b: 2};
const  {a, b} = obj;

console.log(obj);
console.log(a, b);

const array = [1, 2, 3, 4, 5];
const [ zerothEle, firstEle ] = array;
console.log(zerothEle);
console.log(firstEle);