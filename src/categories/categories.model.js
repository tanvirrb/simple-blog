const mongoose = require('mongoose');
const { Schema } = mongoose;
const objectId = Schema.ObjectId;
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  posts: [{
    type: objectId,
    ref: 'Post',
  }],
},
{
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('Category', categorySchema);
