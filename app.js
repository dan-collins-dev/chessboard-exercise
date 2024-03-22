const board = document.getElementById("board");

const tiles = [];

for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
        let tile = document.createElement("div");
        if (row % 2 === 0) {
            tile.classList.add("tile", "even-row");
        } else {
            tile.classList.add("tile", "odd-row");
        }
        tiles.push(tile);
    }
}

for (let tile of tiles) {
    board.appendChild(tile);
}