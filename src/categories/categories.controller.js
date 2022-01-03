const categoryService = require('./categories.service');

module.exports.createCategory = async function (req, res) {
  const category = req.body;
  const createdCategory = await categoryService.createCategory(category);
  return res.status(200).json(createdCategory);
};

// module.exports.getPosts = async function (req, res) {
//   const posts = await postService.getPosts();
//   return res.json(posts);
// };

// module.exports.getPostById = async function (req, res) {
//   const postId = req.params.id;
//   const post = await postService.getPostById(postId);
//   return res.json(post);
// };

module.exports.updateCategoryById = async function (req, res) {
  const categoryId = req.params.id;
  const update = req.body;
  const category = await categoryService.updateCategoryById(categoryId, update);
  return res.json(category);
};
// module.exports.deletePostById = async function (req, res) {
//   const postId = req.params.id;
//   const post = await postService.deletePostById(postId);
//   return res.json(post);
// };
