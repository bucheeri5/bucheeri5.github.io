    /* Function to open the overlay */
    function openNav() {
        document.getElementById("myNav").style.height = "100%";
    }

    /* Function to close the overlay */
    function closeNav() {
        document.getElementById("myNav").style.height = "0%";
    }
	
function calculateScore() {
  // Reset previous selections
  document.querySelectorAll('.correct, .wrong').forEach(el => {
    el.classList.remove('correct', 'wrong');
  });
  
  let score = 0;
  const questions = document.querySelectorAll('.question');
  
  questions.forEach(question => {
    const selectedInput = question.querySelector('input[type="radio"]:checked');
    if (!selectedInput) return; // skips the question if no option is selected

    if (selectedInput.classList.contains('correct')) {
      score++;
      selectedInput.parentElement.classList.add('correct-answer'); // Adds visual cue for correct answers
    } else {
      selectedInput.parentElement.classList.add('wrong-answer'); // Adds visual cue for wrong answers
    }
  });

  const result = document.getElementById('result');
  result.textContent = `Your score is: ${score} out of ${questions.length}`;
  
  // Optional: Scroll to result
  result.scrollIntoView({behavior: 'smooth'});
}
