"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
window.onload = () => {
    var button = document.getElementById("button");
    button === null || button === void 0 ? void 0 : button.addEventListener("click", doclick);
};
function doclick() {
    var date = new Date();
    const obj = document.getElementById("msg");
    obj === null || obj === void 0 ? void 0 : obj.textContent = date.toLocaleString();
}
