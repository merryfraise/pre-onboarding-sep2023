import Component from '../core/Component.js';

export default class HomePage extends Component {
  template() {
    return `
        <div data-component="home-page"></div>
    `;
  }

  mounted() {
    const $homePage = this.$parent.querySelector(
      '[data-component="home-page"]'
    );
  }
}
