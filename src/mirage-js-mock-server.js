import { Server } from "miragejs";

export function mockServerWithMirageJS({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {},

    seeds(server) {},

    routes() {
      this.namespace = "api";

      this.post("/login", (schema) => {
        return {
          token: "123457",
          user: {
            first_name: "User",
            last_name: "name",
            email: "hello@example.com",
          },
        };
      });
    },
  });

  return server;
}
