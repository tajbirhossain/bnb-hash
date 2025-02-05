const router = require("express").Router()
const User = require("../model/User")






router.get("/single-user/:id", async (req, res) => {
    try {
        const findUser = await User.findById(req.params.id)
        res.status(200).json(findUser)
    } catch (error) {
        res.status(500).json(error)
    }
})
router.get("/all-user", async (req, res) => {
    try {
        const getAllUsers = await User.find()
        res.status(200).json(getAllUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})
router.post("/save-user", async (req, res) => {
    try {
        const userStore = new User(req.body)
        const savedUser = await userStore.save()
        res.status(200).json(savedUser)
        const updateRefer = await User.findOne({ refer: String(req.body.joinedRefer) })
        let referUp = { ...updateRefer._doc }
        referUp.joinedCount = Number(referUp.joinedCount) + 1
        await User.findByIdAndUpdate(updateRefer._id, referUp, { new: true })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put("/update-user/:id", async (req, res) => {
    const userId = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
            new: true,
        });
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router