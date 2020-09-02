import { ExcelComponent } from "@core/ExcelComponent";
import { createTable } from "./table.tamplate";

export class Table extends ExcelComponent {
  static className = "excel__table";

  constructor($root) {
    super($root, {
      // listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
    });
  }
  toHTML() {
    return createTable(10); //передаем кол-во строк
  }
}
