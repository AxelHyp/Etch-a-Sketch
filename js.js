let container = document.querySelector(".container")
function makegrid (size) {
    for (let i=0; i<size*size; i++) {
        let squarediv = document.createElement("div")
        squarediv.classList.add("square")
        squarediv.style.height = 960 / size+"px"
        document.querySelector(".container").appendChild(squarediv)
    }
}

container.addEventListener("mouseover", (e) => e.target.style.background = "blue");
document.querySelector(".new").addEventListener("click", () => {
    container.textContent="";
    let gridSize = prompt("How many squares per side? (0-100)");
    if (gridSize <= 100 & gridSize >= 0) {
        makegrid(gridSize) };
});