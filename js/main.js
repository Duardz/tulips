function checkAnswer() {
    const userInput = document.getElementById('riddle-answer').value.trim().toLowerCase();
    const correctAnswer = "echo";
  
    if (userInput === correctAnswer) {
      window.location.href = "pages/poem.html";
    } else {
      document.getElementById('feedback').textContent = "Incorrect. Try again.";
    }
  }
  