const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
function createWindow () {   
    require('devtron').install()
    // 创建浏览器窗口
    let mainWindow = new BrowserWindow({
      width: 1024,
      height: 680,
      webPreferences: {
        nodeIntegration: true
      }
    })
    const urlLocation = isDev ? 'http://localhost:3000' : 'dummyurl'
    
    mainWindow.loadURL(urlLocation)
<<<<<<< HEAD
=======
    mainWindow.webContents.openDevTools()
>>>>>>> 逻辑实现
  }
  
  app.on('ready', createWindow)