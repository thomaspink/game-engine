import { Application, bootstrap, Timestep } from '@game-engine/engine';
import './editor.element.scss';

class EngineApplication extends Application {
  onUpdate(timestep: Timestep) {

  }
}

export class EditorElement extends HTMLElement {
  static observedAttributes = [];

  #app: EngineApplication;

  constructor() {
    super();
    // this.#app = bootstrap(EngineApplication);
  }

  connectedCallback() {
    this.innerHTML = `<canvas class="preview" width="640" height="480"></canvas>`;
    const previewElement = this.querySelector<HTMLCanvasElement>('.preview');
    console.log(previewElement);
  }

  disconnectedCallback() {
    if (this.#app) {
      this.#app.close();
    }
  }
}
customElements.define('game-engine-editor', EditorElement);
