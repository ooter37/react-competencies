module.exports = {
    modifier: (req,res,next) => {
        req.body.message += ' Middleware has been activated.'
        next()
    }
}