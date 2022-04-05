"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const fastifyInstance = (0, fastify_1.default)({ logger: true });
fastifyInstance.get('/', async () => {
    return { hello: 'world' };
});
const start = async () => {
    try {
        await fastifyInstance.listen(3000);
    }
    catch (err) {
        fastifyInstance.log.error(err);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=server.js.map