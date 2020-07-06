const Router = require('koa-router')
const { ParamterException } = require('../../../core/http-exception')
const router = new Router()

router.post('/classic/:id/latest',async (ctx, next) => {
    const path = ctx.params
    const query = ctx.request.query
    const headers = ctx.request.header
    const body = ctx.request.body
    if (true) {
        const error = new ParamterException()
        throw error
    }
    ctx.body = body
    await next()
})

module.exports = router