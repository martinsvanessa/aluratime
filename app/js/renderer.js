const { ipcRenderer } = require('electron');

let linkSobre = document.querySelector('#link-sobre');
let linkFerramentas = document.querySelector('#link-ferramentas');


linkSobre.addEventListener('click', function() {
    ipcRenderer.send('abrir-janela-sobre');
});

linkFerramentas.addEventListener('click', function() {
    ipcRenderer.send('abrir-janela-sobre');
});