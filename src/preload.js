import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  ipcRenderer
});

ipcRenderer.on("asynchronous-reply", (event, arg) => {
    console.log('Data >>', arg) //arg就是Main进程传输来的数据，id必须一致，否则接收无效
})
