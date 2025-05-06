const poemLines = [
  "On the sunny day we met,",
  "How could I ever forget?",
  "You arrived on the darkest days of my life,",
  "Lost in doubt, questioning how to survive.",
  
  "",
  
  "I thought the past was just a mistake,",
  "But now I see it's all for the sake",
  "Of walking through this cold, cruel world,",
  "Finding something precious to hold.",
  
  "",
  
  "It makes me want you even more,",
  "You're the one that I adore.",
  "Distance is just a fleeting thing,",
  "We'll be together when the stars align and sing.",
  
  "",
  
  "Sacrifices will always be worth it,",
  "For every day, you're the reason I commit.",
  "You're the most beautiful soul I've ever met,",
  "Each time you look at me, I melt with no regret."
];

const poemContainer = document.getElementById("poem");
const memoriesBtnContainer = document.getElementById("memories-btn-container");

function typeLine(line, i, callback) {
  let charIndex = 0;
  const paragraph = document.createElement("p");
  poemContainer.appendChild(paragraph);
  
  function typeChar() {
    if (charIndex < line.length) {
      paragraph.innerHTML += line.charAt(charIndex);
      charIndex++;
      setTimeout(typeChar, 100);
    } else {
      if (callback) callback();
    }
  }
  
  typeChar();
}

function typePoem(i = 0) {
  if (i < poemLines.length) {
    if (poemLines[i] === "") {
      poemContainer.appendChild(document.createElement("br"));
      typePoem(i + 1);
    } else {
      typeLine(poemLines[i], i, () => typePoem(i + 1));
    }
  } else {
    // Show the memories button with a fade-in effect when poem is done
    setTimeout(() => {
      memoriesBtnContainer.style.opacity = "1";
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typePoem();
});