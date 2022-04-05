const fastify = require('fastify');

const fastifyInstance = fastify({ logger: true });

fastifyInstance.get('/', async () => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await fastifyInstance.listen(process.env.PORT || 3000);
  } catch (err) {
    fastifyInstance.log.error(err);
    process.exit(1);
  }
};
start();
