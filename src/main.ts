import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './schema'
import { connect } from 'mongoose'

const bootstrap = async () => {
  try {
    await connect('mongodb://localhost:32768/sayro-digital', { useNewUrlParser: true })
    const server = new ApolloServer({ typeDefs, resolvers })
    const { url } = await server.listen()
    console.log(`🚀 -- Server ready at ${url}`)
  } catch (err) {
    console.log('Error connecting to mongoDB')
    console.error(err)
  }
}

bootstrap()