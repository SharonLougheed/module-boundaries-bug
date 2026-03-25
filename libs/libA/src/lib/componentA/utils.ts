// This file contains intentional lint errors to demonstrate the impact of the crash.
// When getRelativeImportPath crashes on the wildcard path in LibA.ts,
// ALL diagnostics in this library are silently lost — including these obvious errors.

export function processData(input: any): any {
  var result = input;
  let unused = 42;
  debugger;
  return result;
}
