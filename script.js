window.addEventListener("keydown", function (event){
    let pressKey = document.querySelector("#which");
    pressKey.textContent = `${event}.which`;    
    let eventKey = document.querySelector("#eventkey");
    eventKey.textContent = `${event.key}`;
    let eventCode = document.querySelector ("#eventcode")
    eventCode.textContent = `Key${event.key}`
});
