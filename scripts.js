// Get container from DOM
const container = document.querySelector(".container");
let size = 64;

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
    // append rows to column divs
    column.appendChild(cell);
  }
    // append to container
    container.appendChild(column)
  }



}

createGrid(size);

// Hover effect

// getGridSize

// on click prompt user for input

// check input must be a num > 0 && < 65

// if valid run createGrid function using input as new size
