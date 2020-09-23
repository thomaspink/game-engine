export function assert(condition: any, desc: string): asserts condition {
  if (!condition) {
    throw new Error(`Assertion Failed: ${desc}`);
  }
}
