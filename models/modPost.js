const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    imgURL: { type: String, required: false },
  },
  { timestamps: true }
)

module.exports = mongoose.model('blog-posts', Post)