const {app, BrowserWindow, ipcMain} = require('electron');
//main.js
let mainWindow = null;
app.on('ready', () => {

    mainWindow = new BrowserWindow({
            width: 800,
            height: 600,

            //resolve problema de abertura de tela secundária
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
            }
        });
    // mainWindow.loadURL("https://www.alura.com.br");
    // aponta pra um arquivo | caminho da minha pasta de arquivo até alura-time 
    console.log(__dirname)
    mainWindow.loadURL(`file:///${__dirname}/app/index.html`);
});    

// possibilita o fechamento da aplicação | fechando a janela pelo 'X'
app.on('window-all-closed', () =>{
    app.quit();''
});

let sobreWindow = null 
ipcMain.on('abrir-janela-sobre', () => {
    if(sobreWindow == null){
        let sobreWindow = new BrowserWindow({
            width:300,
            height:200
        });    
    }
    

    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`)
});
