import * as ns1 from './namespace';

export { ns1 };

export * as ns2 from './namespace';

export const ns3 = { ...ns1 };

export const a = 1;
export const b = 2;
