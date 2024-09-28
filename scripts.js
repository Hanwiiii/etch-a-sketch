const container = document.querySelector("#container");

function newDiv() {
    for (let i = 0; i < 256; i++) {
        let createDiv = document.createElement("div");
        createDiv.style.backgroundColor = "lightyellow";
        createDiv.className = "newDivs";
        container.appendChild(createDiv);
        createDiv.addEventListener("mouseenter", event => {
            event.target.style.backgroundColor = "black";
        });
        createDiv.addEventListener("mouseleave", event => {
            event.target.style.backgroundColor = "lightgray";
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
    let heightAndWidth = 100;
    let userInput = prompt("New grid size: ");
    if (userInput < 101) {
        for (let i = 0; i < userInput * userInput; i++) {
            let userDivs = document.createElement("div");
            userDivs.style.backgroundColor = "lightyellow";
            userDivs.className = "userDivs";
            container.appendChild(userDivs);
            userDivs.addEventListener("mouseenter", event => {
                event.target.style.backgroundColor = "black";
            });
            userDivs.addEventListener("mouseleave", event => {
                event.target.style.backgroundColor = "lightgray";
            });
            userDivs.style.height = (heightAndWidth / userInput) + "%";
            userDivs.style.width = (heightAndWidth / userInput) + "%";
        }
    }
    else {
        alert("This size exceeds the maximum of 100!");
    }
    
});

newDiv();