const { app, BrowserWindow } = require('electron')


function createMainWindow () {
    const mainWindow = new BrowserWindow({
        title: 'Electron',

        width: 1000,

        height: 600

    });
}