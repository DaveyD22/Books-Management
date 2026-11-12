const ErrorHandler = (res, err) =>{
    return res.status(500).json({
        message: err.message || "something went wrong"
    })
}
module.exports = ErrorHandler;