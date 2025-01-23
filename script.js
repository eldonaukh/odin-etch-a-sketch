function main() {
  function createBoard(side) {
    container.innerHTML = "";

    for (let i = 0; i < side; i++) {
      const row = document.createElement("div");
      row.classList.add("row");

      for (let j = 0; j < side; j++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        row.appendChild(grid);
      }

      container.appendChild(row);
    }
  }
  const topDiv = document.createElement("div");
  const container = document.querySelector("#container");
  const pageTitle = document.createElement("h1");
  const promptBtn = document.createElement("button");
  const currentSide = document.createElement("h2");
  document.body.insertBefore(topDiv, container);
  pageTitle.innerText = "Etch-aSketch";
  promptBtn.innerText = "Update number of squares per side";
  topDiv.appendChild(pageTitle);
  topDiv.appendChild(currentSide);
  topDiv.appendChild(promptBtn);
  let side = 16;
  currentSide.innerText = `Current side: ${side}`;
  createBoard(side);
  promptBtn.addEventListener("click", () => {
    let ans = prompt("Please enter number of squares per side: ");
    if (ans > 100) {
      side = 100;
    } else if (ans < 1) {
      side = 1;
    } else {
      side = parseInt(ans);
    }
    currentSide.innerText = `Current side: ${side}`;
    createBoard(side);
  });

  container.addEventListener("mouseover", (evt) => {
    if (evt.target.className === "grid") {
      console.log(evt.target.className);
      evt.target.style.backgroundColor = "#000000";
    }
  });
}

main();
