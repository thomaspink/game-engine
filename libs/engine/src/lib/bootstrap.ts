import { Application } from './application';
import { ApplicationLoop } from './application-loop';

export function bootstrap(App: typeof Application): void {
  const app = new App();
  const loop = new ApplicationLoop((timestep) => app.onUpdate(timestep));

  // Assign the loop to
  (app as any).__loop = loop;

  // Starts and runs the app
  loop.start();

  // If, at some point, the loop stops, close the app
  app.close();
}
