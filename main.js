const { app, BrowserWindow ,ipcMain} = require('electron')
const path = require('node:path')




const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
     autoHideMenuBar: true, // ✅ This hides the menu bar
    icon: path.join(__dirname, 'assets/icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

//   if (app.isPackaged) {
//   win.loadFile(path.join(__dirname, 'frontend/dist/index.html'));
// } else {
//   win.loadURL('http://localhost:5173');
// }
  win.loadURL('http://localhost:5173');

    Menu.setApplicationMenu(null);

}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong') // Handle the ping event
  createWindow()
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
})
