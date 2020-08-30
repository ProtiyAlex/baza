export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error("нет элемента в домлистенер");
    }
    this.$root = $root;
  }
}
