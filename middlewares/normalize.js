

const middleswares = {
    normalize: (req, res, next) => {
        const { user } = req.body
        user.email.toLowerCase()
        user.firstName.toUpperCase()
    }
}