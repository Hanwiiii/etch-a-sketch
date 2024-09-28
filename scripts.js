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

const myButton = document.querySelector("#myButton");

myButton.addEventListener("click", () => {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
});

myButton.addEventListener("click", () => {
    let userInput = prompt("New grid size: ");
    for (let i = 0; i < userInput * userInput; i++) {
        let userDivs = document.createElement("div");
        userDivs.style.backgroundColor = "lightyellow";
        userDivs.className = "userDivs";
        container.appendChild(userDivs);
        userDivs.addEventListener("mouseenter", event => {
            event.target.style.backgroundColor = "green";
        })
        userDivs.addEventListener("mouseleave", event => {
            event.target.style.backgroundColor = "lightgreen";
        })
    }
})

newDiv();