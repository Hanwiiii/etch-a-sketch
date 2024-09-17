const container = document.querySelector("#container");

function newDiv() {
    for (let i = 0; i < 256; i++) {
        let createDiv = document.createElement("div");
        createDiv.style.backgroundColor = "lightblue";
        createDiv.className = "newDivs";
        container.appendChild(createDiv);
    }
};


newDiv();