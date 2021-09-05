const Post = require('./posts.model');

module.exports.createPost = async function (blog) {
  return Post.create(blog);
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
