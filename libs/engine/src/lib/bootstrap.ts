import { Application } from './application';
import { ApplicationLoop } from './application-loop';
import { assert } from './debug';

export interface Constructor<T> {
  new (...args: any[]): T;
}

export function bootstrap<T extends Application>(App: Constructor<T>): T {
  assert(App !== Application && (App as any).__proto__ === Application,
    `Invalid application class provided. Please create your own application ` +
    `class that extends from the engine's abstract application class.`);

  const app = new App();
  const loop = new ApplicationLoop((timestep) => app.__onUpdate(timestep));

  // Assign the loop to
  (app as any).__loop = loop;

  // Starts and runs the app
  loop.start();

  return app;
}
