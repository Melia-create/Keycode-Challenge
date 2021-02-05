let hKey = document.querySelector("#hkey")
let hWhich = document.querySelector("#hwhich")
let hCode = document.querySelector("#hcode")

window.addEventListener("keydown", function (event){
    let pressKey = document.querySelector("#presskey");
    pressKey.textContent = event.which;    
    let eventKey = document.querySelector("#eventkey");
    eventKey.textContent = event.key;
    let eventCode = document.querySelector ("#eventcode")
    eventCode.textContent = event.code
    let eventWhich = document.querySelector ("#eventwhich")
    eventWhich.textContent = event.which
});

