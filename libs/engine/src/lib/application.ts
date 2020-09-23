import { ApplicationLoop, Timestep } from "./application-loop";
import { assert } from "./debug";

export class Application {
  /**
   * @internal Do not use!
   * Reference to the internal application loop.
   */
  set __loop(value: ApplicationLoop) {
    assert(!this.#loop, 'This application has already a loop attached. ' +
    'Close this application and create a new one instead.');
    this.#loop = value;
  }
  #loop?: ApplicationLoop;

  /** Whether the app is currently running. */
  get running(): boolean {
    return this.#loop ? this.#loop.running : false;
  }

  onUpdate(timestep: Timestep) {
    console.log(timestep);
  }

  /** Stops the app from running */
  close(): void {
    this.#loop?.stop();
  }
}
