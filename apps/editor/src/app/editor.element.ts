import { Application, bootstrap } from '@game-engine/engine';
import './app.element.scss';

class EngineApplication extends Application {

}

export class EditorElement extends HTMLElement {
  static observedAttributes = [];

  #app: Application;

  constructor() {
    super();
    bootstrap(EngineApplication);
  }

  connectedCallback() {
    this.innerHTML = ``;
  }
}
customElements.define('game-engine-editor', EditorElement);
