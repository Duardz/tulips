function checkAnswer() {
    const userInput = document.getElementById('riddle-answer').value.trim().toLowerCase();
    const correctAnswer = "sun";
    const feedbackElement = document.getElementById('feedback');
    
    if (userInput === correctAnswer) {
      feedbackElement.textContent = ";)";
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
  
  // Add keypress event for Enter key and mobile optimization
  document.addEventListener('DOMContentLoaded', () => {
    const riddleInput = document.getElementById('riddle-answer');
    const body = document.body;
    
    // Support Enter key
    riddleInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        checkAnswer();
      }
    });
    
    // Focus input when tapping the riddle box on mobile
    document.querySelector('.riddle-box').addEventListener('click', () => {
      riddleInput.focus();
    });
    
    // Prevent zoom on input focus for mobile
    riddleInput.addEventListener('focus', () => {
      // Add a slight delay to ensure input has focus
      setTimeout(() => {
        body.style.height = window.innerHeight + 'px';
      }, 300);
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
      if (document.activeElement === riddleInput) {
        body.style.height = window.innerHeight + 'px';
      }
    });
  });