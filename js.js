let container = document.querySelector(".container")
function makegrid (size) {
    const contSize = size * 10+"px"
    container.style.width = contSize
    for (let i=0; i<size*size; i++) {
        let squarediv = document.createElement("div")
        squarediv.classList.add("square")
        document.querySelector(".container").appendChild(squarediv)
    }
}

container.addEventListener("mouseover", (e) => e.target.style.cssText="background-color:blue")
document.querySelector(".new").addEventListener("click", () => {
    container.textContent=""
    let gridSize = prompt("Enter a grid size (0-100)")
    if (gridSize <= 100 & gridSize >= 0) {
        makegrid(gridSize) }
})