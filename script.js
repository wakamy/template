document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const messageInput = document.getElementById('message-input');
    const messageList = document.getElementById('message-list');

    const newMessage = document.createElement('li');
    newMessage.textContent = messageInput.value;
    messageList.appendChild(newMessage);

    messageInput.value = '';
});

