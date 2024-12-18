// Get container & button from DOM
const container = document.querySelector(".container");
const sizeButton = document.querySelector("#grid-size-btn").addEventListener("click", getGridSize);
let size = 16;

function createGrid(size) {
    // let squareWidth = 800/size + "px";
    // let squareHeight = 800/size + "px";
  // create column
  for (let i = 0; i < size; i++) {
    // create div
    const column = document.createElement("div");
    // add class
    column.classList.add("column");
      // create cells
  for (let j = 1; j <= size; j++) {
    // create div
    const cell = document.createElement("div");
    // add class
    cell.classList.add("cell");
    // row.style.width = squareWidth;
    // row.style.height = squareHeight;
    // append cells to columns
    column.appendChild(cell);
  }
    // append to container
    container.appendChild(column)
  }
}

createGrid(size); // Default 16x16 grid

  // on click prompt user for input
function getGridSize () {
 let userInput = prompt("Enter a number between 1 & 64");
 // Keep prompting user until they've entered a valid input
    while (userInput < 1 || userInput > 64){
       userInput= prompt("Invalid Number! Enter a number between 1 & 64");
    }
    // When valid set size
        size = userInput;
    // clear old grid
    clearGrid();
    // create new grid
    createGrid(size);

}
// set container content empty to avoid creating multiple grids
function clearGrid (){
    container.textContent = "";
}

// Hover effect

