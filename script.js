function main() {
  const container = document.querySelector("#container");
  let side = 16;
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

main();
