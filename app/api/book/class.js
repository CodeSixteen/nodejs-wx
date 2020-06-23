const Router = require('koa-router')
const router = new Router()

router.get('/classic/latest',async (ctx, next) => {
    ctx.body = {
        path: '/classic/latest'
    }
    await next()
})

module.exports = router