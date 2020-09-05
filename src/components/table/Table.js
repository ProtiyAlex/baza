import { ExcelComponent } from "@core/ExcelComponent";
import { createTable } from "./table.tamplate";
import { resizeHandler } from "./table.resize";
//import { shouldResize } from "./table.functions";
import { TableSelection } from "./tableSelection";
//import { isCell } from "./table.functions";
//import { matrix } from "./table.functions";
import { isCell, matrix, nextSelector, shouldResize } from "./table.functions";
import { $ } from "@core/dom";

export class Table extends ExcelComponent {
  static className = "excel__table";

  constructor($root) {
    super($root, {
      listeners: ["mousedown", "keydown"],
    });
  }

  toHTML() {
    return createTable(20);
  }
  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();

    const $cell = this.$root.find(`[data-id="0:0"]`);
    this.selection.select($cell);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    } else if (isCell(event)) {
      const $target = $(event.target);
      if (event.shiftKey) {
        const $cells = matrix($target, this.selection.current).map((id) =>
          this.$root.find(`[data-id="${id}"]`)
        );
        this.selection.selectGroup($cells);
      } else {
        this.selection.select($target);
      }
    }
  }
  onKeydown(event) {
    const keys = [
      "Enter",
      "Tab",
      "ArrowLeft",
      "ArrowRight",
      "ArrowDown",
      "ArrowUp",
    ];

    const { key } = event; //диструктуризация key из event

    if (keys.includes(key) && !event.shiftKey) {
      //keys.includes в массиве keys присутствует
      event.preventDefault();
      const id = this.selection.current.id(true);
      const $next = this.$root.find(nextSelector(key, id));
      this.selection.select($next);
    }
  }
}
