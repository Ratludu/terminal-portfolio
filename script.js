document.addEventListener("DOMContentLoaded", function () {
  const terminalOutput = document.getElementById("terminal-output");
  const userInput = document.getElementById("user-input");

  // Function to handle user commands
  const handleCommand = (command) => {
    switch (command.toLowerCase()) {
      case "--help":
        printToTerminal(`
Available commands:
- help: Show this help message
- about: Display information about me
- skills: List my skills
- clear: Clear the terminal
`);
        break;
      case "--about":
        printToTerminal(`
Hello, I'm a passionate web developer with experience in JavaScript, HTML, CSS, and more.
I'm constantly learning and improving my skills. Let's build something amazing!
`);
        break;
      case "--skills":
        printToTerminal(`
Skills:
- JavaScript
- HTML & CSS
- React
- Node.js
- Git & GitHub
`);
        break;
      case "clear":
        terminalOutput.textContent = "";
        break;
      default:
        printToTerminal(`Command not found: ${command}`);
    }
  };

  // Function to print to the terminal output
  const printToTerminal = (text) => {
    terminalOutput.textContent += `$ ${text}\n\n`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight; // Auto-scroll to bottom
  };

  // Listen for user input
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const command = userInput.value.trim();
      if (command) {
        printToTerminal(`$ ${command}`);
        handleCommand(command);
      }
      userInput.value = ""; // Clear the input field
    }
  });

  // Display a welcome message when the page loads
  printToTerminal(`
Welcome to my portfolio.
Type '--help' for a list of commands.
`);
});
