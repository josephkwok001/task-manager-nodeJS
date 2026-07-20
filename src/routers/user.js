const express = require("express")
const router = new express.Router()
const User = require("../models/user")
const auth = require("../middleware/auth")


router.post("/users", async (req, res) => { 
    const user = new User(req.body)

    try {
        await user.save()
        
        const token = await user.generateAuthToken()

        res.status(201).send({user, token})
    } catch (e) {
        res.status(400).send(e)
    }
    
})


// 1. Client sends email + password (Postman)
// 2. findByCredentials → find user, check password with bcrypt
// 3. generateAuthToken → create a JWT, save it on the user, return it
// 4. Client stores the token and sends it on later requests
//    (Authorization: Bearer <token>)
// 5. Server verifies the token → knows which user it is

router.post("/users/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()

        res.send({ user, token })


    } catch (e) {
        res.status(400).send()
    }

})

router.post("/users/logout", auth, async (req, res) => {
    try {
        // filters the only device's token from the tokens array (other device stays logged in)
        req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token)

        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post("/users/logoutAll", auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get("/users/me", auth, async (req, res) => {
    res.send(req.user)
})


//updating
router.patch("/users/me", auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ["name", "email", "password", "age"]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid Update"})
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete("/users/me", auth, async (req, res) => {
    try {
        await req.user.deleteOne()
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router

