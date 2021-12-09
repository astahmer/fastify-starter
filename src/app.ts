import fastify from "fastify";

export const makeApp = () => {
    const app = fastify({ logger: true });

    app.get("/", async (request, reply) => {
        return { hello: "world" };
    });

    return app;
};

function noop() {}
