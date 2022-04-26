import * as PIXI from "pixi.js"

window.onload= () => {
    var button = document.getElementById("button");
    
    button?.addEventListener("click",doclick)
}

function doclick():void {
    var date = new Date();
    const obj = document.getElementById("msg");
    obj?.textContent = date.toLocaleString();
}