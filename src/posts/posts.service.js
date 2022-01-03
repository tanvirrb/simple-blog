const Post = require('./posts.model');
const Category = require('../categories/categories.model');
const mongoose = require('mongoose');

module.exports.createPost = async function (post) {
  const session = await mongoose.startSession();
  await session.startTransaction();
  try {
    const [newPost] = await Post.create([post], { session: session});

    await Category.findByIdAndUpdate(post.category, { $push: { posts: newPost._id}}, { session: session });
    await session.commitTransaction();
    session.endSession();

    return newPost;
  } catch (err) {
    console.error(err);
    await session.abortTransaction();
    session.endSession();
    return null;
  }
  // return Post.create(post);
};

module.exports.getPosts = async function () {
  return Post.find({});
};

module.exports.getPostById = async function (postId) {
  return Post.findById(postId);
};

module.exports.updatePostById = async function (postId, update) {
  return Post.findByIdAndUpdate(postId, update, { new: true });
};

module.exports.deletePostById = async function (postId) {
  return Post.findByIdAndDelete(postId);
};
