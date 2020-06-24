const Router = require('koa-router')
const router = new Router()

router.post('/classic/:id/latest',async (ctx, next) => {
    const path = ctx.params
    const query = ctx.request.query
    const headers = ctx.request.header
    const body = ctx.request.body
    ctx.body = body
    throw new Error('err')
    await next()
})

module.exports = router