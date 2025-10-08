// Private variables and functions
function createUser(name) {
  const discordName = '@' + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const user = createUser('ar1ze');
user.giveReputation();
user.giveReputation();

console.log({
  discordName: user.discordName,
  reputation: user.getReputation(),
});
