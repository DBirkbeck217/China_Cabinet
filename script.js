let mode = "src"

let tower1 = document.getElementById("tower1")
tower1.addEventListener("click", moveDisk)
let tower2 = document.getElementById("tower2")
tower2.addEventListener("click", moveDisk)
let tower3 = document.getElementById("tower3")
tower3.addEventListener("click", moveDisk)

let currentDisk
let diskVal

function moveDisk(event) {
    console.log(mode)
    let currentTower = event.currentTarget

    if (mode == "src") {
        currentDisk = currentTower.lastElementChild
        diskVal = currentDisk.dataset.size
        mode = "dest"
    }

    else if (mode == "dest") {
        if (currentTower.lastElementChild)
        console.log(diskVal,currentTower.lastElementChild.dataset.size)

        if (currentTower.lastElementChild && diskVal < currentTower.lastElementChild.dataset.size) {
            return alert("No disk may be placed on top of a smaller disk! Try again")
        } 
        else {
            currentTower.appendChild(currentDisk)
            mode = "src"
        }
    }

    if (tower3.childElementCount > 3) {
        return alert("You Win!")
    }

}