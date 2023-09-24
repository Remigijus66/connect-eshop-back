module.exports = {
    validateTrue: (req, res, next) => {
        if(false) return res.send({error: true, message: "description", data: null})
        next()
    }
}