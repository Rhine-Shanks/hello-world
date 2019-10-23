const Koa = require('koa');
const Router = require('koa-router');
const users = require('./routes/api/users');
// 实例化Koa
const app = new Koa();
const router = new Router();




const port = process.env.port || 5000;

// 路由
router.get('/', async ctx => {
  	ctx.body = '<h1>Hello, koa2!</h1>';
})
// 配置路由地址
router.use('/api/users',users);

// 配置路由
app.use(router.routes()).use(router.allowedMethods());


app.listen(port, () => {
  console.log('服务器已启动，请打开链接：' + 'http://localhost:3000')
})