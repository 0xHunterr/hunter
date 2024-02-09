const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  subfinder: (domain,folderPath)=> ipcRenderer.invoke('subfinder-process',{domain,folderPath})
})