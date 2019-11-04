import { Schema, model } from 'mongoose'

// tslint:disable-next-line: no-var-requires
const validate = require('mongoose-validator')

const displayNameValidator = validate({
  validator: 'isLength',
  arguments: [2, 128],
  message: 'Display name should be between {ARGS[0]} and {ARGS[1]} characters',
})

const emailValidator = validate({
  validator: 'isEmail',
  message: 'Email should be valid'
})

const UserSchema = new Schema({
  displayName: {
    type: String,
    validate: displayNameValidator
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: emailValidator,
  },
  photoUrl: String,
  lastLogin: {
    type: Date,
    default: Date.now(),
  },
  googleUid: String,
})

export default model('User', UserSchema)