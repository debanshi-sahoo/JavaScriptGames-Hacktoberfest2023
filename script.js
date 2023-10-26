const words = ["java", "javascript", "python", "pascal", "ruby", "perl", "swift", "kotlin"];
const hint = ["Object-oriented programming language", "Programming language for web development", "High-level programming language", "Imperative and procedural programming language", "Dynamic, reflective, object-oriented programming language", "High-level, general-purpose programming language", "Multi-paradigm programming language", "Cross-platform programming language"];

let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
let selectedHint = hint[randomIndex];
let wordArray = selectedWord.split("");
let guessArray = Array(wordArray.length).fill("_");

document.getElementById("hint").innerHTML = selectedHint;
document.getElementById("word").innerHTML = guessArray.join(" ");

document.getElementById("submit").addEventListener("click", function() {
  let guess = document.getElementById("guess").value.toLowerCase();
  let index = wordArray.indexOf(guess);
  
  if (index === -1) {
    alert("Wrong guess, try again!");
  } else {
    guessArray[index] = guess;
    document.getElementById("word").innerHTML = guessArray.join(" ");
    document.getElementById("guess").value = "";
    if (guessArray.indexOf("_") === -1) {
      alert("Congratulations, you won!");
    }
  }
});

document.getElementById("reset").addEventListener("click", function() {
  randomIndex = Math.floor(Math.random() * words.length);
  selectedWord = words[randomIndex];
  selectedHint = hint[randomIndex];
  wordArray = selectedWord.split("");
  guessArray = Array(wordArray.length).fill("_");
  document.getElementById("hint").innerHTML = selectedHint;
  document.getElementById("word").innerHTML = guessArray.join(" ");
  document.getElementById("guess").value = "";
});