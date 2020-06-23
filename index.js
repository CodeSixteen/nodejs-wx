const Koa = require('koa')
const requireDirectory = require('require-directory')  // 自动加载路由
const Router = require('koa-router')

const app =new Koa()

requireDirectory(module, './app/api', {
    visit: whenLoadModule
})

function whenLoadModule(obj) {
    if (obj instanceof Router) {
        app.use(obj.routes())
    }
}

app.listen(5115)