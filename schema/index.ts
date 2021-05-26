import { makeSchema } from 'nexus'
import path from 'path'
import * as QueryTypes from './Query'

const schema = makeSchema({
  types: [QueryTypes],
  outputs: {
    typegen: path.join(process.cwd(), 'generated', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated', 'schema.graphql')
  }
})

export default schema
