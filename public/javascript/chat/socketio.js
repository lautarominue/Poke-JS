// const socket = io();
// socket.on('messages', messages => {
//     chatBox.innerHTML = '';
//     messages.forEach(message => {
//         if (userName === message.user) {
//             chatBox.innerHTML += `<p class="user">${message.message}<span> :${userName}</span></p>`;
//         } else {
//             chatBox.innerHTML += `<p><span>${message.user}: </span>${message.message}</p>`;
//         }
//     })
//     chatBox.scrollTop = chatBox.scrollHeight;
// });
// const chatForm = document.querySelector('#formChat');
// const chatText = document.querySelector('#chatText');
// const chatBox = document.querySelector('#chat-body');
// chatForm.addEventListener('submit', e => {
//     e.preventDefault();
//     socket.emit('chat', {
//         messageId: socket.id,
//         user: userName,
//         message: chatText.value
//     });
//     chatText.value = '';
// });