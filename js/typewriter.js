// typewriter.js
const words = ["Webdesign","Stand out", "Design", "Create", "And more", "webdesign"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let delay = 100;

function type() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, letterIndex);

  document.getElementById('typewriter-text').innerHTML = currentText;

  if (!isDeleting) {
    letterIndex++;
  } else {
    letterIndex--;
  }

  if (letterIndex === currentWord.length + 1) {
    isDeleting = true;
    delay = 200; // Wacht 1 seconde voordat het wissen begint
  }

  if (letterIndex === 0) {
    isDeleting = false;
    delay = 100; // Ga terug naar het typen na het wissen
    wordIndex = (wordIndex + 1) % words.length; // Ga naar het volgende woord
  }

  setTimeout(type, delay);
}

window.onload = function() {
  type();
};
