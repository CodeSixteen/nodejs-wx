const Router = require('koa-router')
const router = new Router()

router.get('/api',async (ctx, next) => {
    const params = ctx.request.query
    ctx.body = params
    await next()
})

module.exports = router