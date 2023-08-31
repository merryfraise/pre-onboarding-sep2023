import Component from '../../core/Component.js';

export default class Header extends Component {
  template() {
    return `
      <header>
        <div>Deck</div>
        <nav>
          <div>TECHNOLOGY</div>
          <div>IDEAS</div>
          <div>LEADERSHIP</div>
          <div>VIDEO</div>
          <div>NEWS</div>
          <div>FINANCE</div>
          <div>ENTERTAINMENT</div>
        </nav>
        <div>=</div>
      </header>
    `;
  }
}
