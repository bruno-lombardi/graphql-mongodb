import { gql, ApolloError } from 'apollo-server'
import User from './User'
import { Post } from '../Post'

export const typeDefs = gql`

type User {
  id: ID!
  displayName: String!
  email: String!
  photoUrl: String
  lastLogin: Date
  posts: [Post]!
}

`

export const resolvers = {
  User: {
    posts: (user: any) => {
      try {
        return Post.find({authorId: user.id}).limit(50)
      } catch (err) {
        throw new ApolloError(err)
      }
    }
  },
  Query: {
    users: () => User.find().limit(50),
    user: (_: any, { id }: any) => {
      return User.findById(id)
    },
  },
  Mutation: {
    createUser: (_: any, { displayName, email, photoUrl }: any) => {
      try {
        return User.create({ displayName, email, photoUrl })
      } catch (err) {
        throw new ApolloError(err)
      }
    }
  }
}
