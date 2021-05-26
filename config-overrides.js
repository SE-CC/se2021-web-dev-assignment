const post_data = require('./src/mock/post')
const get_data = require('./src/mock/get')
module.exports = {
  devServer: initializer => (proxy, allowedHost) => {
    return Object.assign(initializer(proxy, allowedHost), {
      before(app) {
        // 这里传入的 app 实际上是 expressjs 的 http 服务器实例
        // 如果想要支持参数类型更复杂的 mock server ，请移步 expressjs 的官方文档(并不难)
        // https://expressjs.com/en/starter/hello-world.html
        get_data(app)
        post_data(app)
      },
    })
  },
}