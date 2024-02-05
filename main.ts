import { app, BrowserWindow, ipcMain } from "electron"
import path from "node:path"
import { subFinderList } from "./recon/recon";

let mainWindow:Electron.BrowserWindow;;

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
  ipcMain.on("subfinder-list", (event, { domain, filePath }) => {
    // Pass the domain and file path to your backend function
    subFinderList(domain, filePath);
  });
});
