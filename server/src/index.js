import express from 'express';
import { readDB } from './dbController.js';
import resolvers from './resolvers/index.js';
import { ApolloServer } from 'apollo-server-express';
import messagesRoute from './router/messages.js';
import userRoute from './router/user.js';

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  // 참초데이터
  context: {
    db: {
      messages: readDB('messages'),
      messages: readDB('users'),
    },
  },
});

const app = express();
await server.start();
server.applyMiddleware({
  app,
  path: '/graphql',
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
  },
});

await app.listen({ port: 8000 });
console.log('server listening on 8080');
