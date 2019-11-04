import { gql } from 'apollo-server'
import {UserTypesDefs, UserResolvers } from './User/'
import { merge } from 'lodash'
import { PostTypeDefs, PostResolvers } from './Post'

const baseDefs = gql`
scalar Date

type Query {
  users: [User!]!
  user(id: ID!): User
  posts: [Post!]!
  post(id: ID!): Post
}
type Mutation {
  createUser(displayName: String!, email: String!, photoUrl: String): User
  createPost(title: String!, content: String, authorId: String, status: String!, thumbnail: String, type: String!): Post
}

`

export const typeDefs = [
  baseDefs,
  UserTypesDefs,
  PostTypeDefs
]

export const resolvers = merge(UserResolvers, PostResolvers)