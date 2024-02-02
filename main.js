const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const { exec } = require('child_process');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile('index.html');

  // Handle IPC message from renderer process
  ipcMain.on('process-domain', (event, { domain, filePath }) => {
    // Pass the domain and file path to your backend function
    subfinderForSingleWindow(domain, filePath, event);
  });
});

