const log = console.log;
const header = log;
const newLine = '\n';

header('Parsing  JSON');
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
log(obj);
log(newLine);

header('Stringify a JavaScript Object');
const myJSON = JSON.stringify(obj);
console.log(myJSON);
