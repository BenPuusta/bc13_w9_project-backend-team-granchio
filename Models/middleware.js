const adjectivesArr = [
  "Blue",
  "Orange",
  "Yellow",
  "Purple",
  "Banana",
  "Red",
  "Blue",
  "Skinny",
  "Latte",
  "Daffy",
  "Dave",
  "Dinky",
  "Darth",
  "Dapper",
  "Drama",
  "Dilitante",
  "Danger",
  "Dippy",
];


const nounArr = [
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Goose",
  "IncognitoDuck",
  "GingerbreadMan",
  "SoCMentor",
  "John-how-do-I-auto-generate-my-duck-please-help",
];
function getDuckName() {
  console.log("duck name please good sir?");
  let firstName =
  adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
  let secondName = nounArr[Math.floor(Math.random() * nounArr.length)];
  return `${firstName} ${secondName}`;
}

export default getDuckName;

//well named variables and function name
// I don't think you need to say Duck so many times as you're using math.random later