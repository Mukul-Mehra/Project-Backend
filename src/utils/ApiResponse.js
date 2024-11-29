class ApiResponse {
    constructor (statusCode,message,data = 'success'){
        this.message = message
        this.data = data
        this.success = statusCode < 400
        this.statusCode = statusCode
    
    }
}