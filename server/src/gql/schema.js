import { buildSchema } from 'graphql'

export default buildSchema(`
type Query {
    stadiums: [Stadium]
}

type Stadium {
    name: String!
    crimesCommitted: Int!
}
`)
