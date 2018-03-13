// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const webview1 = document.getElementById('webview1')

setTimeout(() => {
    const newWebview = document.createElement('webview');
    newWebview.style.flex = '1';
    newWebview.guestinstance = webview1.guestinstance
    document.body.appendChild(newWebview);
    document.body.removeChild(webview1);
}, 1000);