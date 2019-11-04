import User from './User'
import { typeDefs, resolvers } from './schema'

const UserTypesDefs = typeDefs
const UserResolvers = resolvers

export {
  User,
  UserTypesDefs,
  UserResolvers
}