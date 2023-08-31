import Component from './core/Component.js';
import HomePage from './pages/HomePage.js';

export default class App extends Component {
  template() {
    return `
        <main data-component="responsive-app"></main>
    `;
  }

  mounted() {
    const $responsiveApp = this.$parent.querySelector(
      '[data-component="responsive-app"]'
    );

    new HomePage($responsiveApp);
  }
}
