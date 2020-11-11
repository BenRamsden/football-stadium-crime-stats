import express from 'express'
import expressGraphQL from 'express-graphql'
import resolvers from './src/gql/resolvers'
import schema from './src/gql/schema'

/**
 * Environment Variables
 */
const PORT = process.env.PORT || 4000

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
export default app.listen(PORT, () =>
    console.log(`Express GraphQL Server Now Running On localhost:${PORT}/graphql`),
)
