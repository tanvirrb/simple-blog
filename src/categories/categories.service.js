const Category = require('./categories.model');

module.exports.createCategory = async function (category) {
  return Category.create(category);
};

// module.exports.getPosts = async function () {
//   return Post.find({});
// };

// module.exports.getPostById = async function (postId) {
//   return Post.findById(postId);
// };

module.exports.updateCategoryById = async function (categoryId, update) {
  return Category.findByIdAndUpdate(categoryId, update, { new: true });
};

// module.exports.deletePostById = async function (postId) {
//   return Post.findByIdAndDelete(postId);
// };
