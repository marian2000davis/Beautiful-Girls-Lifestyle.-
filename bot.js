function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value;
  const chatLog = document.getElementById('chat-log');

  if (message.trim() === '') return;

  chatLog.innerHTML += `<p><strong>You:</strong> ${message}</p>`;

  // Simple response logic
  let reply = "I'm here to help!";
  if (message.toLowerCase().includes('beauty')) {
    reply = "Beauty starts from within! 💄✨";
  } else if (message.toLowerCase().includes('fashion')) {
    reply = "Trendy is good, but confidence is better! 👗";
  }

  chatLog.innerHTML += `<p><strong>Bella:</strong> ${reply}</p>`;
  input.value = '';
  chatLog.scrollTop = chatLog.scrollHeight;
}

