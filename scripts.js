const container = document.querySelector("#container");

function newDiv() {
    for (let i = 0; i < 256; i++) {
        let createDiv = document.createElement("div");
        createDiv.style.backgroundColor = "lightyellow";
        createDiv.className = "newDivs";
        container.appendChild(createDiv);
        createDiv.addEventListener("mouseenter", event => {
            event.target.style.backgroundColor = "green";
        });
        createDiv.addEventListener("mouseleave", event => {
            event.target.style.backgroundColor = "lightgreen";
        });
    }
};


newDiv();