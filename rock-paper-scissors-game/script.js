const startBtn = document.getElementById("startButton");
const gesture = document.getElementById("gesture");
const video = document.getElementById("video");
const gameResult = document.getElementById("gameResult");

const modelUrl = "https://teachablemachine.withgoogle.com/models/VMxr6qoFe/model.json";
let userChoice = "";
let computerScore = 0;
let userScore = 0;

let classifier = ml5.imageClassifier(modelUrl, modelLoaded)

function modelLoaded() {
  console.log("Model Loaded");
  startVideo();
}

async function startVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;
  video.play();
  classifyGesture();
}

function classifyGesture() {
  classifier.classify(video, (result)=>{
    userChoice = result[0].label;
    gesture.innerText = `user choice: ${userChoice}`
  })
  
  setTimeout(classifyGesture,100);
}

startBtn.addEventListener("click", () => {
  playGame(userChoice);
});

function playGame(userChoice) {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomNumber];
  let result = "";
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Rock")
  ) {
    result = "You win!";
    userScore++;
    document.getElementById('userScore').innerText = userScore;
  } else {
    result = "You lose!";
    computerScore++;
    document.getElementById('computerScore').innerText = computerScore;
  }
  gameResult.innerText = `Computer chose: ${computerChoice}. ${result}`;
}
