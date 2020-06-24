const catchError = async(ctx, next) => {
    try {
        await next()
    } catch (error) {
        ctx.body = '服务器异常'
    }
}

module.exports = catchError