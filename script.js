window.addEventListener("keydown", function (event){
    let pressKey = document.querySelector("#which");
    pressKey.textContent = `${event}.which`;
