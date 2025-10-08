// Private variables and functions
function createUser(name) {
  const discordName = '@' + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const increaseLevel = () => level++;

  return { name, getReputation, giveReputation, increaseLevel };
}

const player = createPlayer('ar1ze');

console.log(player);

const obj = { a: 1, b: 2 };
const { b, a } = obj;
