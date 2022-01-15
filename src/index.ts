import { cityLocation, severeWeatherAlert, oneHourForecast } from './utilities/axios';
import { GraphQLServer } from 'graphql-yoga'

const typeDefs = `
  type Query {
    hello(name: String): String!
    severeWeatherAlert(city: String, state: String): SevereInfo
  }

  type SevereInfo {
    country_code: String
    lon: Int
    timezone: String
    lat: Int
    alerts: [SevereWarning],
    city_name: String
    state_code: String
  }

  type SevereWarning {
    title: String
    description: String
    severity: String
    effective_utc: String
    effective_local: String
    expires_utc: String
    expires_local: String
    onset_utc: String
    onset_local: String
    ends_utc: String
    ends_local: String
    uri: String
    regions: [String]
  }
`

const resolvers = {
  Query: {
    severeWeatherAlert: async (_:any, { city, state }: {city: string, state: string }) => {
        return await severeWeatherAlert(city, state);
    }
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => {
    console.log('Server is running on http://localhost:4000/')
})

