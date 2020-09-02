const CODES = {
  A: 65,
  Z: 90,
};
function toCell(content) {
  return `<div class="cell" contenteditable="">${content}</div> `;
}

function toColumn(content) {
  // наша ячейка
  return `<div class="column"> 
           ${content}
          </div> `;
}

function createRow(index, content) {
  return `<div class="row"> 
            <div class="row-info">${index ? index : ""}</div>
            <div class="row-data">${content}</div>
          </div> `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount).fill().map(toChar).map(toColumn).join("");

  //fill заполнение массива "" пустой строкой

  rows.push(createRow(null, cols));
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
      .fill()
      .map((el) => toCell("")) //вместо "" вставим значение нам нужное
      .join("");
    rows.push(createRow(i + 1, cells));
  }
  return rows.join("");
}
