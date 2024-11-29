class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        errors = [],
        statck = ""
    ) {
        super(message)
        this.message = message
        this.statusCode = statusCode
        this.data = null
        this.success = false
        this.stack = statck
        this.errors = errors

        if (statck) {
            this.stack = statck

        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export {ApiError}