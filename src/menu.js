const {electron,BrowserWindow,Menu,ipcMain,debug} = require('electron');
const template1 = [
    {
        label: "设置",
        submenu: [
            {
                label: "全局设置",
                click:function () {
                    set = new BrowserWindow({
                        width: 650,
                        height: 500,
                        frame:false,
                        backgroundColor:"#3B3B3B",
                        webPreferences: {
                            nodeIntegration: true,
                            contextIsolation: false
                        }
                    })
                    // nowset=set
                    ipcMain.on('window-close', function(event, arg) {
                        set.close()
                    });
                    set.on('closed', function () {
                        set = null
                    })
                    set.loadFile('app://./set.vue')
                }
            }
        ]
    },
    {
        label: '视图',
        submenu: [
            {
                label: '刷新',
                accelerator: 'CmdOrCtrl+R',
                click: function(item, focusedWindow) {
                    if (focusedWindow)
                        focusedWindow.reload();
                }
            },
            {
                label: '强制刷新',
                role:"forcereload"
            },
            {
                label: '切换全屏',
                accelerator: (function() {
                    if (process.platform == 'darwin')
                        return 'Ctrl+Command+F';
                    else
                        return 'F11';
                })(),
                click: function(item, focusedWindow) {
                    if (focusedWindow)
                        focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
                }
            },
            {
                label: '开发人员工具',
                accelerator: (function() {
                    if (process.platform == 'darwin')
                        return 'Alt+Command+I';
                    else
                        return 'Ctrl+Shift+I';
                })(),
                click: function(item, focusedWindow) {
                    if (focusedWindow)
                        focusedWindow.toggleDevTools();
                }
            },
        ]
    },
    {
        label: '帮助',
        role: 'help',
        submenu: [
            {
                label: '更多',
                click: function() { require('electron').shell.openExternal('http://electron.atom.io') }
            },
        ]
    },
];
var list = Menu.buildFromTemplate(template1)
Menu.setApplicationMenu(list)