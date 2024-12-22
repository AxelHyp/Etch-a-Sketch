
document.querySelector(".container").style.cssText = "width:160px"
for (let i=0; i<16*4; i++) {
    let squarediv = document.createElement("div")
    squarediv.classList.add("square")
    document.querySelector(".container").appendChild(squarediv)
}