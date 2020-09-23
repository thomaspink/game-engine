import { ApplicationLoop, Timestep } from "./application-loop";
import { assert } from "./debug";

export abstract class Application {
  /**
   * @internal Do not use!
   * Reference to the internal application loop.
   */
  private set __loop(value: ApplicationLoop) {
    assert(!this.#loop, 'This application has already a loop attached. ' +
    'Close this application and create a new one instead.');
    this.#loop = value;
  }
  #loop?: ApplicationLoop;

  /** Whether the app is currently running. */
  get running(): boolean {
    return this.#loop ? this.#loop.running : false;
  }

  abstract onUpdate(timestep: Timestep): void;

  /**
   * @internal Do not use!
   */
  __onUpdate(timestep: Timestep) {
    if (typeof this.onUpdate === 'function') {
      this.onUpdate(timestep);
    }
  }

  /** Stops the app from running */
  close(): void {
    this.#loop?.stop();
  }
}
