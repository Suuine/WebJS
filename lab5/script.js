let difficulty = null;
let score = 0;
let color = null;
let timerInterval = null;
let timerDisplay = null; 

document.addEventListener("DOMContentLoaded", () => {
  timerDisplay = document.getElementById("timer"); 

  document.getElementById("color-select").addEventListener("change", (e) => {
    color = e.target.value;
    console.log("Selected color:", color);
  });

  document.getElementById("dificalty-select").addEventListener("change", (e) => {
    difficulty = e.target.value;
    console.log("Selected difficulty:", difficulty);
  });

  document.getElementById("start-button").addEventListener("click", () => {
    if (color && difficulty) {
      startGame(color, difficulty);
    } else {
      alert("Please select a color and difficulty level.");
    }
  });
});

function moveBlockWithinBounds(block, size) {
  const maxTop = window.innerHeight - size;
  const maxLeft = window.innerWidth - size;

  let randomTop = Math.floor(Math.random() * maxTop);
  let randomLeft = Math.floor(Math.random() * maxLeft);

  block.style.top = randomTop + "px";
  block.style.left = randomLeft + "px";
}

function startGame(color, difficulty) {
  document.querySelector("h1").classList.add("hidden");
  document.querySelector(".controls-container").classList.add("hidden");
  
  const block = document.getElementById("block");
  block.style.display = "block";
  block.style.backgroundColor = color;
  
  if (difficulty === "easy") {
    moveBlockWithinBounds(block, 50);
    gaming(4, 50, 100);   
  }
  else if (difficulty === "middle") {
    moveBlockWithinBounds(block, 30);
    gaming(3, 30, 200); 
  }
  else if (difficulty === "hard") {
    moveBlockWithinBounds(block, 20);
    gaming(2, 20, 1000); 
  }
}

function gaming(initialSeconds, size, addPos) {
  let seconds = initialSeconds;
  const block = document.getElementById("block");
  block.style.width = size + "px";
  block.style.height = size + "px";
  block.style.position = "absolute";

  if (block.clickListener) {
    block.removeEventListener("click", block.clickListener);
  }

  block.clickListener = () => {
      score++;
      seconds = initialSeconds;

      const currentTop = parseFloat(block.style.top) || 0;
      const currentLeft = parseFloat(block.style.left) || 0;

      const maxTop = window.innerHeight - size;
      const maxLeft = window.innerWidth - size;

      let deltaTop = (Math.random() * 2 - 1) * addPos;
      let deltaLeft = (Math.random() * 2 - 1) * addPos;

      let targetTop = currentTop + deltaTop;
      let targetLeft = currentLeft + deltaLeft;

      targetTop = Math.max(50, Math.min(targetTop, maxTop));
      targetLeft = Math.max(50, Math.min(targetLeft, maxLeft));

      block.style.top = targetTop + "px";
      block.style.left = targetLeft + "px";

      checkTimer(seconds);
  };

  block.addEventListener("click", block.clickListener);

  checkTimer(seconds);
  block.style.display = "block";
}

function checkTimer(seconds) {
  if (timerInterval) clearInterval(timerInterval);

  currentSeconds = seconds;
  timerDisplay.style.display = "block";
  updateTimerDisplay(currentSeconds);

  timerInterval = setInterval(handleTimerTick, 1000);
}

function handleTimerTick() {
  currentSeconds--;
  updateTimerDisplay(currentSeconds);

  if (currentSeconds <= 0) {
    clearInterval(timerInterval);
    alert("Time's up! Your score is: " + score);
    resetGame();
  }
}

function updateTimerDisplay(seconds) {
  timerDisplay.textContent = "Time: " + seconds + "s";
}

function resetGame() {
  window.location.reload();
}
