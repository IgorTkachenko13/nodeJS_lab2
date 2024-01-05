import HttpServer from './server/http-server.js';
import { router } from './lib/routes.js';

const httpServer = new HttpServer(router.routes);

console.log(httpServer.routing)
