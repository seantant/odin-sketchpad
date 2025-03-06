const container = document.querySelector("#container");
const button = document.querySelector("button");

button.addEventListener("click", () => newBoard());

function mouseIn(div) {
    div.style.backgroundColor = "blue";
}

function mouseOut(div) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function clearBoard() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function newBoard() {
    let input = prompt("Enter 0 < n <= 100 for board of size n x n:", "16");
    if (input === null) {
        return;
    }

    while (isNaN(+input) || input < 1 || input > 100) {
        console.log("invalid size");
        input = prompt("Enter 0 < n <= 100 for board of size n x n:", "16");
        if (input === null) {
            return;
        }
    }

    clearBoard();

    for (let i = 0; i < input * input; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        div.id = i;

        div.style.width = `${100 / input}%`;
    
        div.addEventListener("mouseenter", () => {mouseIn(div)});
        div.addEventListener("mouseleave", () => {mouseOut(div)});
    
        container.appendChild(div);
    }
}

for (let i = 0; i < 16*16; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");
    div.id = i;

    div.addEventListener("mouseenter", () => {mouseIn(div)});
    div.addEventListener("mouseleave", () => {mouseOut(div)});

    container.appendChild(div);
}