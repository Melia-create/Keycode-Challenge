window.addEventListener("keydown", function (event){
    document.querySelector("#container1").style.visibility = "visible";
    let pressKey = document.querySelector("#presskey");
    pressKey.textContent = event.which;    
    let eventKey = document.querySelector("#eventkey");
    eventKey.textContent = event.key;
    let eventCode = document.querySelector ("#eventcode")
    eventCode.textContent = event.code
    let eventWhich = document.querySelector ("#eventwhich")
    eventWhich.textContent = event.which
});

