import { gql, ApolloError } from 'apollo-server'
import Post from './Post'
import { User } from '../User'

export const typeDefs = gql`

type RecentLike {
  postId: String!,
  postTitle: String,
  postType: String,
  userId: String!,
  username: String,
}

type Post {
  id: ID!
  title: String!
  content: String
  author: User
  authorId: String!
  likesCount: Int!
  viewsCount: Int!
  status: String!
  thumbnail: String
  type: String!
  recentLikes: [RecentLike]
  createdAt: Date
  updatedAt: Date
}

`

export const resolvers = {
  Post: {
    author: (post: any) => {
      try {
        return User.findById(post.authorId)
      } catch (err) {
        throw new ApolloError(err)
      }
    }
  },
  Query: {
    posts: () => Post.find(),
    post: (_: any, { id }: any) => {
      try {
        return Post.findById(id)
      } catch (err) {
        throw new ApolloError(err)
      }
    },
  },
  Mutation: {
    createPost: (_:any, args: any) => {
      try {
        return Post.create(args)
      } catch (err) {
        throw new ApolloError(err)
      }
    }
  }
}
