import * as namespace from './namespace.js';
export { namespace as ns1 };
export { namespace as ns2 };

const ns3 = { ...namespace };

const a = 1;
const b = 2;

export { a, b, ns3 };
