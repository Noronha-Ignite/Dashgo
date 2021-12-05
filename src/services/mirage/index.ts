import { ActiveModelSerializer, createServer, Factory, Model, Response } from 'miragejs';
import faker from 'faker';

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.name.findName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList('user', 200);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all('user').length;

        const pageStart = Number(per_page) * (Number(page) - 1);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd);

        return new Response(200, { 'x-total-count': String(total) }, { users });
      });

      this.get('/users/:id');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
