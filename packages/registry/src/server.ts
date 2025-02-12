import { DPR } from './dregistry.js';

const server = new DPR();

if (import.meta.url === `file://${process.argv[1]}`) {
  server.start();
}

export default server;
