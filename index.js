const Koa = require('koa')
const parser = require('koa-bodyparser')
const InitMangager = require('./core/init')
const catchError = require('./middleware/exception')

const app =new Koa()
app.use(parser())
app.use(catchError)
InitMangager.initCore(app)

app.listen(5115)