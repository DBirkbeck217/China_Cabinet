let mode = "src";

let tower1 = document.getElementById("tower1");
tower1.addEventListener("click", moveDisk);
let tower2 = document.getElementById("tower2");
tower2.addEventListener("click", moveDisk);
let tower3 = document.getElementById("tower3");
tower3.addEventListener("click", moveDisk);

let currentDisk;
let diskVal;

function moveDisk(event) {
  let currentTower = event.currentTarget;

  if (mode == "src") {
    currentDisk = currentTower.lastElementChild;
    diskVal = currentDisk.dataset.size;
    currentDisk.style.border = "thick solid #0000FF";

    mode = "dest";
  } else if (mode == "dest") {
    currentDisk.style.border = "none";

    if (currentTower.lastElementChild === null) {
      currentTower.appendChild(currentDisk);
    }

    if (
      diskVal > currentTower.lastElementChild.dataset.size &&
      currentTower.lastElementChild
    ) {
      alert("No disk may be placed on top of a smaller disk! Try again");
      mode = "src";
    } else {
      currentTower.appendChild(currentDisk);
      mode = "src";
    }
  }

  if (tower1.childElementCount === 1) {
    return alert("You Win!");
  }
}
