import express from 'express'
import expressGraphQL from 'express-graphql'
import resolvers from './gql/resolvers/index'
import schema from './gql/schema'

/**
 * Environment Variables in .env file
 * footballDataApiKey
 */
require('dotenv').config()

/**
 * Configuration
 */
const app = express()
app.use(express.json())

/**
 * Endpoints
 */
app.use(
    '/graphql',
    expressGraphQL({
        schema: schema,
        rootValue: resolvers,
        graphiql: true,
    }),
)

app.get('/', (req, res) => {
    res.send('Hello world!')
})

/**
 * Listen
 */
export default app.listen(4000, () =>
    console.log(`Express GraphQL Server Now Running On localhost:4000/graphql`),
)
