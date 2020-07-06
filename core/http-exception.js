class HttpException extends Error{
    constructor(msg = '服务器错误', status = 400, errorCode = 2000) {
        super()
        this.msg = msg
        this.status = status
        this.errorCode = errorCode
    }
}

class ParamterException extends HttpException{
    constructor(msg, errorCode) {
        super()
        this.msg = msg || '参数错误',
        this.code = 400,
        this.errorCode = errorCode || 2001
    }
}
module.exports = {
    HttpException,
    ParamterException
}