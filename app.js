const board = document.getElementById("board");
const btn = document.getElementById("animate-btn");

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

btn.addEventListener("click", function () {
    let count = 0;
    const intervalId = setInterval(function () {
        board.appendChild(tiles[count]);
        count++;
        if (count >= tiles.length) {
            clearInterval(intervalId);
        }
    }, 100);
});