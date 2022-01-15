// For Environment Variables
import { config } from 'dotenv';
config();

// API Class
import { Weatherbit } from './class/Weatherbit';

// GraphQL
import { GraphQLServer } from 'graphql-yoga';

const resolvers = {
  Query: {
    severeAlerts: async (_: any, { city, state }: { city: string, state: string }) => (
      await new Weatherbit().severeAlerts(city, state)
    )
  }
}

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({ ...req })
})

server.start(() => {
  console.log('Server is running on http://localhost:4000/')
});
