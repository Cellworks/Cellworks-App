//imports
const { app, Menu, BrowserWindow } = require('electron')

//functions
function createWindow () {
  const mainWindow = new BrowserWindow({
    //start small
    width: 1024,
    height: 768,

    //dont show until ready
    show: false
  })

  //load Cellworks Repair site as main window
  mainWindow.loadURL('https://www.cellworksrepair.com/')

  //dont show page until it has loaded
  mainWindow.once('ready-to-show', mainWindow.show)
}

//remove menu bar
Menu.setApplicationMenu(null);

//run init function
app.whenReady().then(createWindow)

//exit app
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

//activate app
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})