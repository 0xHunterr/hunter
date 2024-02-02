const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  // Expose ipcRenderer to the window object
  window.ipcRenderer = ipcRenderer;
});
