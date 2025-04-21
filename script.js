document.addEventListener("DOMContentLoaded", () => {
  const wallpaper =
    "url(https://tse4.mm.bing.net/th?id=OIG1.y1fRFIvzw10hf9MRpQGj&pid=ImgGn)";

  document.body.style.backgroundImage = wallpaper;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.minHeight = "100vh";

  window.result = document.querySelector(".result");
  window.playHuman = playHuman;
  window.humanScoreElement = document.getElementById("human-score"); // Pegando pelo ID
  window.machineScoreElement = document.getElementById("machine-score"); // Pegando pelo ID
});

// Variáveis do placar
let humanScoreNumber = 0;
let machineScoreNumber = 0;

// Função que escolhe aleatoriamente para a máquina
const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
};

// Função que inicia o jogo quando o humano escolhe
const playHuman = (humanChoice) => {
  const machineChoice = playMachine();
  console.log("Humano:", humanChoice, "| Máquina:", machineChoice);
  playTheGame(humanChoice, machineChoice);
};

// Função que decide o resultado e atualiza o placar
const playTheGame = (human, machine) => {
  console.log("Humano:", human, "| Máquina:", machine);

  if (human === machine) {
    result.innerHTML = "Deu empate!";
  } else if (
    (human === "paper" && machine === "rock") ||
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {
    humanScoreNumber++;
    humanScoreElement.innerText = humanScoreNumber; // Atualiza corretamente o placar do humano
    result.innerHTML = "Você Ganhou!";
  } else {
    machineScoreNumber++; // Aqui está a correção!
    machineScoreElement.innerText = machineScoreNumber; // Atualiza corretamente o placar da máquina
    result.innerHTML = "Você perdeu!";
  }
};
