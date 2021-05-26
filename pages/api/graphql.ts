// pages/api/graphql.ts
import { ApolloServer } from 'apollo-server-micro'
import schema from '../../schema'

const server = new ApolloServer({
  schema
})

/**
 * https://nextjs.org/docs/api-routes/api-middlewares#custom-config
 */
type Config = {
  api: {
    externalResolver?: boolean
    bodyParser?:
      | boolean
      | {
          sizeLimit: string
        }
  }
}

export const config: Config = {
  api: {
    bodyParser: false
  }
}

export default server.createHandler({
  path: '/api/graphql'
})
