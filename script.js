// alert("this is big brother");
function ageInDays() {
  var birthYear = prompt("my good friend, which year dem born you? do tell!");
  var ageInDays = (2022 - birthYear) * 365;
  // lets practice dom manipulation
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "you are " + ageInDays + "  days old."
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("btn").appendChild(h1);
}
function reset() {
  document.getElementById("ageInDays").remove();
  // document.getElementById("howOld").remove();
}

function howOld() {
  var howOld = prompt("what is your birth year, wonderful earthling?");
  var howOld = 2022 - howOld;
  var h2 = document.createElement("h2");
  var myAge = document.createTextNode(
    "you are " + howOld + " years old; do you know sound of music?"
  );
  h2.setAttribute("id", "howOld");
  h2.appendChild(myAge);
  document.getElementById("reclick").appendChild(h2);
}
// var button = document.createElement("button");01
// button.setAttribute("id", "remove");
// button.appendChild(remove);

// function remove() {
//   document.getElementById("remove").remove();
// }
function cancelYear() {
  document.getElementById("howOld").remove();
}

// cat generator
function generateCat() {
  var image = document.createElement("img");
  var p = document.getElementById("cat-images");
  image.src = "images/trivet double carat.jpg";
  p.appendChild(image);
}
function catGen() {
  document.getElementById("cat-images").remove();
}

// my own side of the story

//   if (((humanChoice = 1), (botChoice = 0))) {
//     status = "you won!";
//     console.log(message);
//   } else if (((humanChoice = 0), (botChoice = 1))) {
//     status = "you lost!";
//   } else  (((humanChoice = 0.5), (botChoice = 0.5))) {
//     status = "you tied!";
//   }
//   //(0,1)human lost | bot won
//   message = finalMessage(results);
//   rgsFrontEnd(yourChoice.id, botChoice, Message); //{"message": "you won!", "color": "green"}

// rock, paper, scissors;
function rpsGame(yourChoice) {
  // from line 67 to line 75 is more like the skeleton and the procedures
  console.log(yourChoice); //to get the answer to the body, which is the body we are supposed to fill up
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log(botChoice);
  results = decideWinner(humanChoice, botChoice);
  console.log(results);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, botChoice) {
  var rpsDatabase = {
    "rock": { "scissors": 1, "rock": 0.5, "paper": 0 },
    "paper": { "rock": 1, "paper": 0.5, "scissors": 0 },
    "scissors": { "paper": 1," scissors": 0.5, "rock": 0 },
  };
  var yourScore = rpsDatabase[yourChoice][botChoice];
  var botScore = rpsDatabase[botChoice][yourChoice];

  return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]) {
  if (yourScore === 0) {
    return {"message": "you lost!", "color": "red"};
  } else if (yourScore === 0.5) {
    return {"message": "you tied!", "color": "yellow"};
  } else {
    return {"message": "you won!", "color": "green"};
  }
}


