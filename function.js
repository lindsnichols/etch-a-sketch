const grid = document.querySelector(".container");
const ctnChangeGrid = document.querySelector("#btnChangeGrid");

let gridDimension = 16;

function createGrid(dimension) {
  grid.innerHTML = "";
  for (let i = 0; i < dimension; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < dimension; i++) {
      let columnElem = document.createElement("columnElement");
      columnElem.classList.add("columnElement");
      row.appendChild(columnElem);
    }
    grid.appendChild(row);
  }
}
createGrid(gridDimension);

grid.addEventListener("mouseover", (event) => {
  let div = event.target;
  div.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215);
});

btnChangeGrid.addEventListener("click", () => {
  let newDimension = parseInt(prompt("Enter new width and height."));
  newDimension = newDimension > 100 ? 100 : newDimension;
  createGrid(newDimension || gridDimension);
});
