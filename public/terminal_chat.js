const whoamiBtn = document.getElementById('whoami-btn');
const terminal = document.getElementById('terminal');
const downloadBtn = document.querySelector('.download-button');

const textLines = [
  "I'm an entry-level Software Engineer passionate about building impactful, reliable systems and continuously learning in fast-paced environments. With over 3 years of software development experience and 2 years of technical leadership I have been recognized as a Gerald and Thelma Merit Scholarship Awardee at UCLA for academic excellence and leadership."
];
let activeTimeout = null;
let typingSpeed = 10;
let terminalOpen = false;

whoamiBtn.addEventListener('click', () => {
  if (!terminalOpen) {
    // Open terminal and start typing
    terminal.style.display = "block";
    terminal.textContent = '';
    whoamiBtn.innerHTML = "&times;";
    terminalOpen = true;
    downloadBtn.style.display = "none";
    typeLines(0);
  } else {
    // Close terminal
    clearTimeout(activeTimeout);
    terminal.style.display = "none";
    whoamiBtn.textContent = "Who am I?";
    terminalOpen = false;
    downloadBtn.style.display = "inline-block"
  }
});

function typeLines(lineIndex) {
  if (lineIndex < textLines.length) {
    typeLine(textLines[lineIndex], 0, () => {
      terminal.textContent += "\n";
      activeTimeout = setTimeout(() => typeLines(lineIndex + 1), 500);
    });
  }
}

function typeLine(line, charIndex, callback) {
  if (charIndex < line.length) {
    terminal.textContent += line.charAt(charIndex);
    activeTimeout = setTimeout(() => typeLine(line, charIndex + 1, callback), typingSpeed);
  } else {
    callback();
  }
}
