import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { expressMiddleware } from '@apollo/server/express4';
//
import resolvers from './resolvers.js';
import typeDefs from './schemaGQL.js';
//
import Profile from './routes/profile.js'
import index from './routes/index.js'


const PORT = process.env.PORT || 8000;
const app = express();

const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

await server.start();

app.use(cors());
app.use(express.json());
app.use('/graphql', expressMiddleware(server));

app.use('/', index)
app.use('/profile', Profile)

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});