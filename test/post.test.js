process.env.NODE_ENV = 'test';
const chai = require('chai');
const { assert } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');
const Post = require('../src/posts/posts.model');

chai.use(chaiHttp);

describe('post test suit', () => {
  before(async () => {
    await Post.deleteMany({});
  });
  let post = null;

  it('should create a post', async () => {
    const  res = await
    chai
      .request(server)
      .post('/posts')
      .send({title: 'My first blog', body: 'This is my first blog', category: 'blog', author: 'Tanvir'});
    // console.log(res.body);
    post = res.body._id;
    assert.strictEqual(res.status, 200, 'http status should be 200');
    assert.exists(res.body._id, 'post _id should exist');
    assert.isString(res.body.title, 'post title should be a string');
  });

  // it('should get a post by id', async () => {
  //   const  res = await
  //   chai
  //     .request(server)
  //     .get(`/posts/${post}`);
  //
  //   assert.equal(res.status, 200, 'http status should be 200');
  //   assert.exists(res.body.title, 'post title should exist');
  // });

  after(async () => {
    await Post.deleteMany({});
  });
});
