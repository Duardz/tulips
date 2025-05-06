function checkAnswer() {
    const userInput = document.getElementById('riddle-answer').value.trim().toLowerCase();
    const correctAnswer = "echo";
    const feedbackElement = document.getElementById('feedback');
    
    if (userInput === correctAnswer) {
      feedbackElement.textContent = "Correct! Redirecting to your poem...";
      feedbackElement.style.color = "#64a338";
      
      // Add a little animation before redirecting
      setTimeout(() => {
        window.location.href = "pages/poem.html";
      }, 1500);
    } else {
      feedbackElement.textContent = "Incorrect. Try again.";
      feedbackElement.style.color = "#ff6b6b";
      
      // Shake the input
      const riddleInput = document.getElementById('riddle-answer');
      riddleInput.classList.add('shake');
      setTimeout(() => {
        riddleInput.classList.remove('shake');
      }, 500);
    }
  }
  
  // Add keypress event for Enter key
  document.addEventListener('DOMContentLoaded', () => {
    const riddleInput = document.getElementById('riddle-answer');
    riddleInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        checkAnswer();
      }
    });
  });