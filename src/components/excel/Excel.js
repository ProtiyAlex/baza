import { $ } from "@core/dom";
export class Excel {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }
  getRoot() {
    //$.create("div", "excel");
    const $root = $.create("div", "excel");
    // $root.classList.add("excel");
    // $root.textContent = "Test";
    this.components.forEach((Component) => {
      const $el = $.create("div", Component.className);

      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
      //$root.insertAdjacentHTML("beforeend", component.toHTML());
    });
    return $root;
  }

  render() {
    console.log(this.$el);
    //this.$el.insertAdjacentHTML("afterbegin", "<h1>тест</h1>");

    this.$el.append(this.getRoot());
  }
}
