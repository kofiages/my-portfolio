// LIGHT AND DARK MOOD
const modeSwitch = document.getElementById('mode-switch');

modeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// text effect starts here
const texts = [
  "Front-End Developer",
  "Graphic Designer",
  "FIGMA | PSD | XD  DESIGNS TO HTML"
];
// Index for tracking current text
let index = 0;
// Function to type text
function typeText() {
  const text = texts[index];
  const typingText = document.getElementById("typing-text");
  typingText.textContent = "";

  // Recursive function to simulate typing
  function typeCharacter(i) {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      setTimeout(() => typeCharacter(i + 1), 50);
    } else {
      setTimeout(eraseText, 1000);
    }
  }

  // Function to erase text
  function eraseText() {
    const textLength = typingText.textContent.length;
    if (textLength > 0) {
      typingText.textContent = text.substring(0, textLength - 1);
      setTimeout(eraseText, 50);
    } else {
      index = (index + 1) % texts.length; // Move to the next text
      setTimeout(typeText, 500); // Type next text after a delay
    }
  }

  // Start typing
  typeCharacter(0);
}
// Start typing on page load
window.onload = typeText;

// FOR PROJECT POP
function openPopup(projectId) {
  document.getElementById(projectId).style.display = "block";
}
function closePopup(projectId) {
  document.getElementById(projectId).style.display = "none";
}