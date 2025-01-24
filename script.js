function main() {
  function createBoard(side) {
    container.innerHTML = "";
    for (let i = 0; i < side; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < side; j++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = `${600 / side}px`;
        grid.style.height = `${600 / side}px`;
        grid.style.opacity = 0;
        row.appendChild(grid);
      }
      container.appendChild(row);
    }
  }
  const topDiv = document.createElement("div");
  const container = document.querySelector("#container");
  const pageTitle = document.createElement("h1");
  const promptBtn = document.createElement("button");
  const resetBtn = document.createElement("button");
  const colorBtn = document.createElement("button");
  const currentSide = document.createElement("h2");
  document.body.insertBefore(topDiv, container);
  pageTitle.innerText = "Etch-a-Sketch";
  promptBtn.innerText = "Update side (1-100)";
  resetBtn.innerText = "Reset";
  colorBtn.innerText = "Change to random color";
  topDiv.appendChild(pageTitle);
  topDiv.appendChild(currentSide);
  topDiv.appendChild(promptBtn);
  topDiv.appendChild(resetBtn);
  topDiv.appendChild(colorBtn);
  let side = 10;
  let randomColor = false;
  currentSide.innerText = `Current side: ${side}x${side}`;
  createBoard(side);
  promptBtn.addEventListener("click", () => {
    let ans = prompt("Please enter number of squares per side (1-100): ");
    if (ans > 100) {
      side = 100;
    } else if (ans < 1) {
      side = 1;
    } else {
      side = parseInt(ans);
    }
    currentSide.innerText = `Current side: ${side}x${side}`;
    createBoard(side);
  });
  resetBtn.addEventListener("click", () => {
    createBoard(side);
  });
  colorBtn.addEventListener("click", (evt) => {
    if (evt.target.innerText === "Change to random color") {
      evt.target.innerText = "Change to black";
      randomColor = true;
    } else {
      evt.target.innerText = "Change to random color";
      randomColor = false;
    }
  });
  container.addEventListener("mouseover", (evt) => {
    if (evt.target.className === "grid") {
      if (randomColor) {
        evt.target.style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 255
        )},${Math.floor(Math.random() * 255)},${Math.floor(
          Math.random() * 255
        )})`;
      } else {
        evt.target.style.backgroundColor = "#000000";
      }
      evt.target.style.opacity = `${
        parseFloat(evt.target.style.opacity) + 0.1
      }`;
    }
  });
}
main();
