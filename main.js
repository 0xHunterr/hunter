const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const recon = require("./recon/recon");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("index.html");

  // Handle IPC message from renderer process
  ipcMain.on("process-domain", (event, { domain, filePath }) => {
    // Pass the domain and file path to your backend function
    //recon.subfinder_for_single_windows(domain, filePath);
  });
});
