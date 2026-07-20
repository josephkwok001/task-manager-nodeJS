const jwt = require("jsonwebtoken")
const User = require("../models/user")


const auth = async (req, res, next) => {
    try {
        // read token from req.head(), what postman sent
        // verify JWT and find user who still has that token
        // req.user = logged in user
        // req.token = the token used for this req
        const token = req.header("Authorization").replace("Bearer ", "")
        const decoded = jwt.verify(token, "thisismynewcourse")
        const user = await User.findOne({ _id: decoded._id, "tokens.token": token })

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()

    } catch (e) {
        res.status(401).send({error: "Please authenticate. "})
    }
}

module.exports = auth