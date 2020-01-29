const remote = require('electron').remote;
document.getElementById("mini").addEventListener("click", function (e){
    var window = remote.getCurrentWindow();
    window.minimize();
});

document.getElementById("maxi").addEventListener("click", function (e){
    var window = remote.getCurrentWindow();
    if (!window.isMaximized()){
        window.maximize();
    }else{
        window.unmaximize();
    }
});

document.getElementById("end").addEventListener("click", function (e){
    var window = remote.getCurrentWindow();
    window.close();
});