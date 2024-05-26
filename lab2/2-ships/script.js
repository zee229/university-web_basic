document.addEventListener("DOMContentLoaded", () => {
    const GRID_SIZE = 10;
    const SHIP_COUNT = 20; 

    function generateRandomPositions(gridSize, shipCount) {
        const positions = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));
        let placedShips = 0;

        while (placedShips < shipCount) {
            const row = Math.floor(Math.random() * gridSize);
            const col = Math.floor(Math.random() * gridSize);

            if (positions[row][col] === 0) {
                positions[row][col] = 1;
                placedShips++;
            }
        }

        return positions;
    }

    const positions = generateRandomPositions(GRID_SIZE, SHIP_COUNT);

    const table = document.getElementById("battlefield");
    const cellClass = "cell";
    const shipClass = "ship";

    function createBattlefield() {
        positions.forEach((rowPositions, rowIndex) => {
            const row = table.insertRow();
            rowPositions.forEach((cellPosition, cellIndex) => {
                createBattlefieldCell(row, cellPosition === 0 ? cellClass : shipClass);
            });
        });
    }

    function createBattlefieldCell(row, className) {
        const cell = row.insertCell();
        const element = document.createElement("div");
        element.className = className;
        cell.appendChild(element);
    }

    createBattlefield();
});
