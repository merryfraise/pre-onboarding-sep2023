export default class Component {
  $parent;

  constructor($parent) {
    this.$parent = $parent;
    this.render();
  }

  mounted() {}

  template() {
    return '';
  }

  render() {
    this.$parent.innerHTML = this.template();
    this.mounted();
  }
}
