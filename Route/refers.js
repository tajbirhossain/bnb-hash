const Refer = require("../model/Refer")
const router = require("express").Router()


router.post("/update-refer", async (req, res) => {
    try {
        const getRefer = await Refer.findById(req.body.id)
        let updateCount = { ...getRefer._doc }
        updateCount.countStart = updateCount.countStart + 13
        const updatedRefer = await Refer.findByIdAndUpdate(req.body.id, updateCount, { new: true })
        res.status(200).json(updatedRefer)
    } catch (error) {
        res.status(500).json(error)
    }
})







module.exports = router