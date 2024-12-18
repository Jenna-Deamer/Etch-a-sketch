// Get container from DOM
const container = document.querySelector(".container");
let size = 24;

function createGrid(size) {
  // create column
  for (let i = 0; i < size; i++) {
    // create div
    const column = document.createElement("div");
    // add class
    column.classList.add("column");
      // create rows
  for (let j = 1; j <= size; j++) {
    // create div
    const row = document.createElement("div");
    // add class
    row.classList.add("row");
    row.textContent = (i * size) + j;
    // append rows to column divs
    column.appendChild(row);
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
