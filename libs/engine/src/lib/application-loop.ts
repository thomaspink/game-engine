export interface Timestep {
  readonly step: number;
  readonly previousTime: number;
  readonly currentTime: number;
}

export class ApplicationLoop {
  /** Whether the application is currently running. */
  get running(): boolean {
    return this.#running;
  }
  #running: boolean = false;

  #time: number = 0;
  #startTime: number = 0;

  constructor(private onUpdate: (timestep: Timestep) => void) {}

  start() {
    if (this.#running) {
      throw new Error('Application is already running. Please close it first to run it again.')
    }

    while(this.#running) {
      const current = Date.now();
      if (this.#startTime === 0) {
        this.#startTime = Date.now();
      }
      const currentTime = current - this.#startTime;
      const previousTime = this.#time;
      const step = currentTime - previousTime;
      const timestep: Timestep = {
        previousTime,
        currentTime,
        step,
      };

      this.onUpdate(timestep);

      this.#time = currentTime;
    }
  }

  stop() {
    this.#running = false;
  }
}
