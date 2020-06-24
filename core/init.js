const Router = require('koa-router')
const requireDirectory = require('require-directory') // 自动加载所有路由文件
class InitMangager{
    static initCore(app) {
        InitMangager.app = app
        InitMangager.initLoadRouter()
    }
    static initLoadRouter() {
        const apiPath = `${process.cwd()}/app/api` // 获取api文件夹的绝对路径，保证任何位置调用都不会变化
        requireDirectory(module, apiPath, {
            visit: whenLoadModule
        })
        function whenLoadModule(obj) {
            if (obj instanceof Router) {
                InitMangager.app.use(obj.routes())
            }
        }
    }
}

module.exports = InitMangager