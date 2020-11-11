import { buildSchema } from 'graphql'

export default buildSchema(`
type Query {
    stadiums: [Stadium]
}

type Stadium {
    id: Int!
    name: String!
    address: String!
    postcode: String!
    latitude: Float
    longitude: Float
    crimes: [Crime]
}

type Crime {
    id: Int!
    category: String!
    outcome_status: CrimeOutcomeStatus!
}

type CrimeOutcomeStatus {
    category: String!
    date: String!
}
`)
