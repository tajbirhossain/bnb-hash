const router = require("express").Router()
const User = require("../model/User")


router.post("/authenticate", async (req, res) => {
    try {
        const findUser = await User.find({ email: req.body.email, password: req.body.password })
        res.status(200).json(findUser)
    } catch (error) {
        res.status(500).json(error)
    }
})




module.exports = router