import Post from './Post'
import { typeDefs, resolvers } from './schema'

const PostResolvers = resolvers
const PostTypeDefs = typeDefs

export {
  Post,
  PostTypeDefs,
  PostResolvers
}