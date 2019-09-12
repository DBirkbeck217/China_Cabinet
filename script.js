let mode = "src"

let tower1 = document.getElementById("tower1").addEventListener("click", moveDisk)

let tower2 = document.getElementById("tower2").addEventListener("click", moveDisk)

let tower3 = document.getElementById("tower3").addEventListener("click", moveDisk)

let currentDisk = ""

let disk1 = document.getElementById("disk1")
let disk2 = document.getElementById("disk2")
let disk3 = document.getElementById("disk3")
let disk4 = document.getElementById("disk4")

let disk1Val = 1
let disk2Val = 2
let disk3Val = 3
let disk4Val = 4

function moveDisk() {
    let currentTower = event.currentTarget
    let diskCount = currentTower.childElementCount

    if (mode == "src") {
        currentDisk = currentTower.lastElementChild
        mode = "dest"
    }

    else {
        currentTower.appendChild(currentDisk)
        mode = "src"
    }

}