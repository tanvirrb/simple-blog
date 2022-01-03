const mongoose = require('mongoose');
const { Schema } = mongoose;
const objectId = Schema.ObjectId;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  category: {
    type: objectId,
    ref: 'Category'
  },
  author: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Post', postSchema);
