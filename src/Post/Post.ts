import { Schema, model } from 'mongoose'

const PostSchema = new Schema({
  authorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: String,
  title: {
    type: String,
    maxlength: [160, 'Title max length is 160']
  },
  likesCount: Number,
  viewsCount: Number,
  recentLikes: [{
    postId: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
    postTitle: String,
    postType: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    username: String,
  }],
  status: String,
  thumbnail: String,
  type: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
})

PostSchema.pre('save', function(next) {
  this.set('updatedAt', Date.now())
  return next()
})

export default model('Post', PostSchema)