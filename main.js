const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const { spawn } = require('node:child_process');

function createWindow () {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  ipcMain.on('set-title', (event, title) => {
    const ls = spawn(title,['localhost']);
    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
    
    ls.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    
    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
  })

  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})