const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const table = document.getElementById("calendar");
const dayNameClass = "dayNameElement";
const workDayClass = "workDayElement";
const weekendClass = "weekendElement";
const daysCount = 29;

function createCalendar() {
    let dayCounter = 1;
    const totalRows = 6;
    const daysInWeek = 7;

    for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
        const row = table.insertRow();

        for (let colIndex = 0; colIndex < daysInWeek; colIndex++) {
            if (rowIndex === 0) {
                appendCell(row, dayNameClass, days[colIndex]);
            } else if (dayCounter <= daysCount) {
                const cellClass = colIndex < 5 ? workDayClass : weekendClass;
                appendCell(row, cellClass, dayCounter);
                dayCounter++;
            } else {
                appendCell(row, "", "");
            }
        }
    }
}

function appendCell(row, className, textContent) {
    const cell = row.insertCell();
    const div = document.createElement("div");
    div.className = className;
    div.textContent = textContent;
    cell.appendChild(div);
}

createCalendar();
