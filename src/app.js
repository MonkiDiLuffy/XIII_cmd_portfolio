document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('commandInput');
    const output = document.getElementById('output');
  
    const commands = {
      help: 'Available commands: about, projects, contact, clear',
      about: 'I am a web developer with a passion for creating dynamic and responsive web applications.',
      projects: '1. Project One - Description\n2. Project Two - Description\n3. Project Three - Description',
      contact: 'Email: example@example.com\nLinkedIn: linkedin.com/in/example',
      clear: ''
    };
  
    commandInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const command = commandInput.value.trim();
        if (commands.hasOwnProperty(command)) {
          if (command === 'clear') {
            output.innerHTML = '';
          } else {
            output.innerHTML += `<div class="text-yellow-500"><span class="text-green-500">$</span> ${command}</div>`;
            output.innerHTML += `<div>${commands[command]}</div>`;
          }
        } else {
          output.innerHTML += `<div><span class="text-green-500">$</span> ${command}</div>`;
          output.innerHTML += `<div class="text-red-500">Command not found. Type 'help' for a list of commands.</div>`;
        }
        commandInput.value = '';
        output.scrollTop = output.scrollHeight;
      }
    });
  });
  